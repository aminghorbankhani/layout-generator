import React, { useCallback, useEffect, useState } from 'react'

interface Layout {
  name: string
  class: string
}

const LayoutGenerator = ({ input }: {input: string}): JSX.Element => {
  const [items, setItems] = useState<Layout[]>([])

  const getLayouts = useCallback((value: string) => {
    const result: string[] = []
    const arr = value.split('')

    let num = 0
    let string = ''
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i] > 0) {
        num = +arr[i]
      } else if (arr[i] !== '/') {
        string += arr[i]
      }

      if ((arr[i + 1] === undefined) || arr[i + 1] === '/') {
        if (num > 0) {
          for (let j = 0; j < num; j++) {
            result.push(string)
          }
        } else {
          result.push(string)
        }

        num = 0
        string = ''
      }
    }

    setItems(result.map(item => {
      return {
        name: item,
        class: item === 'XL' ? 'w-full h-1/2' : item === 'L' ? 'w-full h-1/4' : 'w-1/2 h-1/4'
      }
    }))
  }, [])

  useEffect(() => {
    if (input !== '') {
      getLayouts(input)
    }
  }, [input])

  return (
    <div className="w-100 h-[500px] bg-gradient-to-br from-cyan-300 to-indigo-300 rounded-md shadow">
      {items.map((item, index) => (
        <div className={`flex justify-center items-center border-dashed rounded-md float-left border-2 ${item.class}`} key={index}>
          <h2 className="text-xl text-white">{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default LayoutGenerator
