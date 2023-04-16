
const Format = (text) => {
    const anotherRegex = /"/gmi;
    const regexSpace = /\\n+/gmi;

    const regexLink = /https:\/\/\w+\.\w+\/\w+\/*[\S]*/gmi;
    // 
    const anotherText = text.replaceAll(anotherRegex, '');
    const spaceText = anotherText.replaceAll(regexSpace, '\n');
    const formated = spaceText.replaceAll(regexLink, '');
    return formated;
  }
  


export default Format;