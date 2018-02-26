# Using React

## Base Component

The minimum code needed to create a new React component

```jsx
import React from 'react'

export default () => {
  return (
    <div className='pf-c-component-name'>
      ... rest of html
    </div>
  )
}
```

## Adding Styles to a React Component

**step 1** - create the styles.scss in the same directory as the component

**step 2** - import the styles in the component (*line 2*)

```jsx{2}
import React from 'react'
import './styles.scss'

export default () => {
  return (
    <div className='pf-c-component-name'>
      ... rest of html
    </div>
  )
}
```

## Allowing HTML in a React Component

**step 1** - add `children` as an accepted parameter for the function (*line 4*)

**step 2** - place `{children}` where you want display the dynamic content (*line 7*)

```jsx{4, 7}
import React from 'react'
import './styles.scss'

export default ({children}) => {
  return (
    <div className='pf-c-component-name'>
      {children}
    </div>
  )
}
```

## Allowing Attributes on a React Component

**step 1** - add the camel-cased name of the attribute you want to the function, for example: `headerModifier` (*line 4*)

**step 2** - place the camel-cased attribute where you want to use it (*line 7*)

```jsx{4,7}
import React from 'react'
import './styles.scss'

export default ({headerModifier}) => {
  return (
    <div className='pf-c-component-name'>
      <div className={`pf-c-component-name__header ${headerModifier}`}>
      </div>
      ...
    </div>
  )
}
```
