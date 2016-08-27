function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var db = './db.json';

var fs = require('fs');
var url = require('url');
var cors = require('cors');
var express = require('express');
var app = express();

const getItems = () => {
	var ret;
	try {
		ret = JSON.parse(fs.readFileSync(db, 'utf8'));
		ret.success = true;
	} catch(e) {
		ret = { "error": e.stack.toString(), "success": false };
	}
	return ret;
}

const addItem = (title) => {
	var items = getItems();
	try {
		items.Items.push({
			"_id": guid(),
			"done": false,
			"title": title
		});
		delete items.success;
		fs.writeFileSync(db, JSON.stringify(items));
		items.success = true;
	} catch (e) {
		items = { "error": e.stack.toString(), "success": false };
	}
	return items;
}

const removeItem = (id) => {
	var items = getItems();
	try {
		items.Items = items.Items.filter( i => i._id!==id );
		delete items.success;
		console.log(items);
		fs.writeFileSync(db, JSON.stringify(items));
		items.success = true;
	} catch (e) {
		items = { "error": e.stack.toString(), "success": false };
	}
	return items;
}

const toggleItem = (id) => {
	var items = getItems();
	try {
		items.Items.forEach( (i) => i.done = (i._id===id) ? !i.done : i.done );
		delete items.success;
		fs.writeFileSync(db, JSON.stringify(items));
		items.success = true;
	} catch (e) {
		items = { "error": e.stack.toString(), "success": false };
	}
	return items;
}

app.use(cors());
app.options('*', cors());
app.get(/services.js/, (req,res) => {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	switch(query.action) {
		case "add":
			res.json(addItem(query.title)); break;
		case "remove":
			res.json(removeItem(query.id)); break;
		case "toggle":
			res.json(toggleItem(query.id)); break;
		default:
			res.json(getItems());
	}
});

app.listen(3050);
