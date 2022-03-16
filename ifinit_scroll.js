const iniatpage = document.querySelector(".scroll");
        const li = Array.from(document.querySelectorAll('.move'));

        window.onscroll = ()=>{
                // const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
                if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                    // setTimeout(loadedpage,1000)
                    loadedpage()
            }
        
        function loadedpage(){
            const para = document.createElement('div');
            // li.forEach(item =>{
                para.className = 'move'
                para.innerHTML = iniatpage.innerHTML;  
                
            // })

            iniatpage.append(para)

        }    
    }