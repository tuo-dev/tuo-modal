import React, { useState } from 'react'
import TuoFadeModal from './lib/components/TuoFadeModal'

const Test = () => {
  const [open , setOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>test</button>
      <TuoFadeModal open={open} onClose={()=> setOpen(false)}>CONTENT</TuoFadeModal>
    </div>
  )
}

export default Test