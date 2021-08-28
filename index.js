const readline = require('readline-sync')

function start() { 
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnSearchPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipédia search term: ')
    }

    function askAndReturnSearchPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const seletedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const seletedPrefixText = prefixes[seletedPrefixIndex]

        return seletedPrefixText
    }

    console.log(content)
}
start() 