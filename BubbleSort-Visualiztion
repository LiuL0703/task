<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>冒泡排序可视化</title>
    <style>
        h1{
            text-align: center;
        }
        .container{
            width:800px;
            height: 600px;
            margin:40px auto;
            border: 1px dashed #cc0;
        }
        output{
            display: flex;
            height: 100%;
            justify-content: space-around;
        }
        output span {
            text-align: center;
            margin: 0 12px; 
            color: #ffffff;
            font-weight: bold;
            font-size: 16px;
            background-color: #3498db;
        }
        output span.bar {
            flex: 1;
            align-self: flex-end;
        }
        output span.test {
            background-color: #e74c3c;
        }
        output span.swap {
            background-color: #27ae60;
        }
        output span.sorted{
            background-color: #dba034;
        }
    </style>
</head>
<body>
    <h1>Bubble Sort Visualization</h1>    
    <div class="container">
        <output id="visualization">
        </output>
    </div>
    <script>
    function getRandomArray(n){
        var length = n||10;
        var array = [];
        /* for(let i = 0; i < length;i++){
            array[i] = i + 1;
        }
        array.sort(function(a, b) {
            return Math.random() > 0.5 ? -1 : 1;
        }); */
        for(let i = 0; i < length; i++){
            array.push(~~(Math.random()*90)+10)
        }
        return array;
    }
    
    
    function test(array, i, j) {
        return array[j] - array[i];
    }
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function* bubbleSort(array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            // var sorted = true;
            for (var j = 0; j < (length - i) - 1; j++) {
                yield ['test', j + 1, j];
                if (test(array, j + 1, j) > 0) {
                    sorted = false;
                    swap(array, j, j + 1);
                    yield ['swap', j, j + 1];
                }
            }
            document.querySelectorAll('span')[length-i-1].classList.add('sorted');
            /* if (sorted) {
                return;
            } */
        }
    }
    var array = getRandomArray();
    
    // render array
    var visualization = document.querySelector('#visualization');
    visualization.innerHTML = '';
    for (var i = 0; i < array.length; i++) {
        var element = document.createElement('span');
        var value = array[i];
        element.dataset.value = value; 
        element.className = 'bar';
        element.style.height = value + '%';
        element.innerHTML = value;
        visualization.appendChild(element);
    }
    var algorithm = bubbleSort(array);
    var then = performance.now();
    window.requestAnimationFrame(function tick(now) {
        var container = document.querySelector('#visualization');
        var elements = container.querySelectorAll('span');
        var delay = 500;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.translate != '0px') {
                elements[i].style.transition = 'all ' + (delay / 1000) + 's';
                elements[i].style.transform = 'translate(0px)';
            }
        }
        
        if( now - then > delay){
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('test');
                elements[i].classList.remove('swap');
            }
            var step = algorithm.next();
            if(!step.done){
                var element1 = elements[step.value[1]];
                var element2 = elements[step.value[2]];
                var value1 = Number(element1.dataset.value);
                var value2 = Number(element2.dataset.value);
                var distance = Math.floor(element1.offsetLeft - element2.offsetLeft);
                // console.log(step.value);
                if (step.value[0] == 'test') {
                    element1.classList.add('test');
                    element2.classList.add('test');
                }
                if (step.value[0] == 'swap') {
                    var temp = document.createElement('span');
                    element1.parentNode.insertBefore(temp, element1);
                    element1.classList.add('swap');
                    element2.parentNode.insertBefore(element1, element2);
                    element2.classList.add('swap');
                    temp.parentNode.insertBefore(element2, temp);
                    temp.parentNode.removeChild(temp);
                    element1.style.transition = '';
                    element1.style.transform = 'translate(' + (distance * 1) + 'px)';
                    element2.style.transition = '';
                    element2.style.transform = 'translate(' + (distance * -1) + 'px)';
                }
            }
            then = now;
        }
        window.requestAnimationFrame(tick);
    });
    </script>
</body>
</html>
