import React, { useCallback, useState } from 'react'
import Dropdown from './Dropdown'
import LayoutGenerator from './LayoutGenerator'

const layouts = [
  'XL',
  '2XL',
  '4L',
  'XL/2L',
  'XL/L/2SM'
]

const App = (): JSX.Element => {
  const [layout, setLayout] = useState('')

  const clickHandler = useCallback((item: string) => {
    setLayout(item)
  }, [])

  return (
    <div className="container max-w-5xl m-auto p-5">
      <div className="flex justify-between bg-slate-100 p-5 rounded-md items-center shadow mb-5">
        <h1 className="text-lg">Layout Generator</h1>
        <Dropdown title="Select layout" items={layouts} onClick={clickHandler} />
      </div>
      <LayoutGenerator input={layout} />
    </div>
  )
}

export default App
