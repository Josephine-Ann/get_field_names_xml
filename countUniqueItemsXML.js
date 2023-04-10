var convert = require('xml-js')
var fs = require('fs')
var readline = require("readline");
var xml = fs.readFileSync('random_feed.xml', 'utf8')
// change 'xml' to include the XML from which you want to get the field names, and save it to the same directory

var options = {ignoreComment: true, alwaysChildren: true}
var result = convert.xml2js(xml, options)

let products = result

products = result.elements

products = products[0]

products = products.elements[0].elements

const fieldNames = []

for (let i in products) {
    products[i].elements.forEach(element => {
        if (!fieldNames.includes(element.name)) fieldNames.push(element.name)
    })
}

let fieldNamesText = ''

fieldNames.forEach(fieldName => {
    fieldNamesText = fieldNamesText + fieldName + '\n'
});

fs.writeFileSync("fieldNames.txt", fieldNamesText);