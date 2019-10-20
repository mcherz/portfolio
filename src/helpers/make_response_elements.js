import React from "react"

const makeResponseElements = (children, _iterator) => {
  let returnChildren = []
  let iterator = _iterator
  if (typeof children === "string") {
    returnChildren = returnChildren.concat(children
      .split("")
      .map((child) => {
        iterator++
        return <span key={iterator}>{child}</span>
      }))
  } else {
    returnChildren = returnChildren.concat(children.map((child) => {
      if (typeof child === "string") {
        const { children: newChildren, newIterator }
          = makeResponseElements(child, iterator)
        iterator = newIterator
        return newChildren
      } else {
        iterator++
        const { children: newChildren, newIterator }
          = makeResponseElements(child.props.children, iterator)
        iterator = newIterator
        const returnArray = [<a key={iterator}
          href={child.props.href}
          target={child.props.target}
          rel={child.props.rel}
          onClick={child.props.onClick}
        >
          {newChildren}
        </a>]
        iterator++
        return returnArray
      }
    }))
  }

  return {
    children: returnChildren,
    newIterator: iterator
  }
}

export default makeResponseElements
