
        // Создаем сцену и камеру
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Добавляем свет
        var light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // Создаем объект куба
        var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);

        // Рендеринг сцены
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);

        // Функция обновления кадра
        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();
