import React from 'react'
import s from './Dialogs.module.css'

export const Dialogs=(props)=>{
  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <div className={s.dialog+' '+s.active}>
        Dimych
      </div>
        <div className={s.dialog}>
          Andrew
        </div>
        <div className={s.dialog}>
          Sveta
        </div>
        <div className={s.dialog}>
          Valera
        </div>
      </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>How is your it-kamasutra</div>
          <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}