/**
 * 原神网页加载动画
 * @param {int} wait_time - 默认等待时间(s)
 */
function load_beginning(wait_time = 1){   
    // 图片资源
    var yuanshen_img = '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';
    var mihoyo_img = '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'
    var gongyue_img = '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'
  
    // 隐藏body自带边距
    var body = document.getElementsByTagName('body')[0]
    body.style.margin = 0

    // 创建背景
    var beginning = document.createElement('div')
    beginning.style.position = 'fixed'
    beginning.style.top = 0
    beginning.style.backgroundColor = 'white'
    beginning.style.width = '100dvw'
    beginning.style.height = '100dvh'
    beginning.style.display = 'flex'
    beginning.style.flexDirection = 'column'
    beginning.style.justifyContent = 'center'
    beginning.style.alignItems = 'center'
    beginning.style.transition = 'opacity 0.5s'
    beginning.style.opacity = '0'
    beginning.style.zIndex = '9999'

    // 创建控件
    var yuanshen = document.createElement('div')
    var gongyue = document.createElement('div')
    var mihoyo = document.createElement('div')

    yuanshen.style.background = `url(data:image/png;base64,${yuanshen_img}) center center`
    yuanshen.style.backgroundSize = '20%'
    yuanshen.style.backgroundRepeat = 'no-repeat'
    yuanshen.style.width = '100%'
    yuanshen.style.height = '100%'
    yuanshen.style.transition = 'opacity 0.5s'

    gongyue.style.background = `url(data:image/png;base64,${gongyue_img}) center center`
    gongyue.style.backgroundSize = '80%'
    gongyue.style.backgroundRepeat = 'no-repeat'
    gongyue.style.width = '100%'
    gongyue.style.height = '20%'
    gongyue.style.position = 'fixed'
    gongyue.style.bottom = '20px'
    gongyue.style.opacity = 0
    gongyue.style.transition = 'opacity 0.5s'

    mihoyo.style.background = `url(data:image/png;base64,${mihoyo_img}) center center`
    mihoyo.style.backgroundSize = '30%'
    mihoyo.style.backgroundRepeat = 'no-repeat'
    mihoyo.style.width = '100%'
    mihoyo.style.height = '100%'
    mihoyo.style.opacity = 1
    mihoyo.style.transition = 'opacity 0.5s'

    // 加载元素
    document.body.appendChild(beginning)
    beginning.appendChild(yuanshen)
    beginning.appendChild(gongyue)
    beginning.appendChild(mihoyo)


    // 动画流程
    setTimeout(() => {
        beginning.style.opacity = 1
        yuanshen.style.display = 'none'
    }, 100);

    setTimeout(() => {
        mihoyo.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        mihoyo.style.display = 'none'
        yuanshen.style.display = 'flex'
        yuanshen.style.opacity = 1
        gongyue.style.opacity = 1
    }, 1500);

    setTimeout(() => {
        if (document.readyState === "complete") {
            hide()
        }else{
            window.addEventListener("load", hide);
        }
    }, 1500 + wait_time * 1000);
    
    function hide() {
        beginning.style.opacity = 0
        setTimeout(() => {
            console.log('加载完成')
            document.body.removeChild(beginning)
        },500);
    }
}

load_beginning()