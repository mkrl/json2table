# json2table
A pretty useless Node script that creates a single table out of json object. Ever dreamed of observing the entire JSON with all the nested objects in a single table? This thing does that. Soon(tm) to be a npm package.


Requirements
------------

 - [json2csv](https://www.npmjs.com/package/flat)
 - [flat](https://www.npmjs.com/package/flat)

Usage
-----

- Make sure you have NodeJS and all the requirements installed
- Change input JSON / output CSV file paths at the beginning of the script. Also you might want to change the amount of table rows to be displayed.
- Run `node json2table` via terminal or cmd.

Why does this exist?
--------------------

A couple of times my development team needed to take a look at all the JSON values and see if some of the objects are missing certain parameters. It is quite a dumb way to do that, but it was requested and here it is. The main clue of this code is to also generate table headers and add blank non-existing parameters to objects so all the nested objects have the same amount of similar parameters.