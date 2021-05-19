/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/
import appAndPages from './app-and-pages'
import chartsAndMaps from './charts-and-maps'
import formsAndTables from './forms-and-tables'
import uiElements from './ui-elements'

// Array of sections
export default [...appAndPages, ...uiElements, ...formsAndTables, ...chartsAndMaps]
