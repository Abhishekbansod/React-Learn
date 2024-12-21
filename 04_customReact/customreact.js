function customRender(reactElement, container){

    // not optimized 
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.innertext
    // setting up the attributes
    domElement.setAttribute(reactElement.props.href)
    domElement.setAttribute(reactElement.props.target)
    container.appendChild(domElement)*/

    // optimized way
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.innertext

    for (const eachprop in reactElement.props) {
        if(eachprop === 'innertext') continue
        domElement.setAttribute(eachprop, reactElement.props[eachprop])
    }

    container.appendChild(domElement)
}

// creating a object/react-element
const reactElement = {
    type : 'a',
    props: {
        href : 'https://developer.themoviedb.org/reference/intro/getting-started',
        target : '_blank'
    },
    innertext: 'click here to get movie API'
}

const rootElement = document.getElementById('root') 

customRender(reactElement, rootElement)