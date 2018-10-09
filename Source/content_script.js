var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/mormon/gi, 'satan');
            var replacedText = replacedText.replace(/The Church of Jesus Christ of Latter-Day Saints/gi, 'Even The Church of Jesus Christ of Latter-Day Saints');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}