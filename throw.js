AFRAME.registerComponent("pool_balls", {
    init: function () {
      this.bowlingBall();
    },
    bowlingBall: function () {
      window.addEventListener("keydown", (h) => {
        if (h.key === "z") {
          var pool_ball = document.createElement("a-entity");
  
          pool_ball.setAttribute("geometry", {
            primitive: "circle",
            radius: 1.5,
          });
  
          pool_ball.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          pool_ball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          bullet.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(pool_ball);
        }
      });
    },
  });
  
  
  