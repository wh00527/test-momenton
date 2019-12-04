const relations = (items, id = null, link = "manager_id") =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: relations(items, item.id) }));

module.exports = relations;