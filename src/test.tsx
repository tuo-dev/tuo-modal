import React, { useState } from 'react'
import TuoFadeModal from './lib/components/TuoFadeModal'

const Test = () => {
  const [open , setOpen] = useState<'test' | 'apple' | 'close'>('close');
  return (
    <div>
      <button onClick={() => setOpen('test')}>test</button>
      <button onClick={() => setOpen('apple')}>apple</button>
      <TuoFadeModal open={open !== 'close'} onClose={()=> setOpen('close')} closeAnimationEnd={() => console.log('end!')}>{open}</TuoFadeModal>
    </div>
  )
}

export default Test