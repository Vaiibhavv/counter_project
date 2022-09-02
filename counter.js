var count = 0;
        let uc = document.getElementById("uc");
        let lc = document.getElementById("lc");
        let rc= document.getElementById('reset');
        uc.addEventListener("click", func1);
        lc.addEventListener("click", func2);
        rc.addEventListener("click", func3);

        var ch = document.getElementById("ch");

        function func1() {
            count += 1;
            ch.innerHTML = count;
        }
        function func2() {
            count -= 1
            ch.innerHTML = count;
           // console.log(count);
        }
        function func3()
        {
            count=0;
            ch.innerHTML = count;
        }