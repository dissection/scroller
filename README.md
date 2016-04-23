# scroller

## options

###  参数

**delay**[`number`]  
    每次触发onScroll，执行函数 的间隙时间  
    [`defult`]50
    
**start** [`number,object`]  
    number: start + startThreshold 
    object: $(start).offset().top  + startThreshold 
    [`defult`] null :  this.$el.offset().top  + [startThreshold] 
    
 **end** [`number,object`]  
     number: end + startThreshold  
     object: $(end).offset().top  + startThreshold   
     [`defult`] null :  _startTop + this.$el.outerHeight()  + [stopThreshold]    
 
 
 **startThreshold** [`number`]  
    对应 start 值的 增值 区间  
    [`defult`]：0
    
  **stopThreshold** [`number`]  
     对应 end 值的 减值 区间  
     [`defult`]：0
     
###  回调

**onStart** [`function`]  
* [`start  和  end 表示一组区间`]:只有在这个范围内 才会触发 onStart()
 

**onEnd** [`function`]  
* [`start  和  end 表示一组区间`]:不在这个范围内 才会触发 onEnd()

**onScroll** [`function`]  
只要触发 onScroll 就会执行

## 版本

1.0.0