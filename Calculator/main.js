'use strict'

  function update( _v) //input tag を更新する関数
  {
    document.querySelector('input').value = _v
  }
  
  function append( _v)//押された数字ボタンを追加する関数
   {
    document.querySelector('input').value += _v
  }

  function calc() //[=]で計算する関数
  {
    const v = document.querySelector( 'input' ).value
    try {
      const f = new Function( 'return ' + v) 
      update( f().toString() )
    } catch( _error ) {
      update( _error)//計算に失敗した場合、エラー内容を表示
    }
  }
