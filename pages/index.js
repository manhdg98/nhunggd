import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="container">
    <div class="cover">
      <div class="front">
        <img
          src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/09/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-nh%E1%BB%AFng-ng%C6%B0%E1%BB%9Di-c%C3%B3-r%C4%83ng-kh%E1%BB%83nh-d%E1%BB%85-th%C6%B0%C6%A1ng-nh%E1%BA%A5t-19.jpg" />
      </div>
      <div class="back">
        <img
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/122075559_370295807421030_4352695005791288408_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JuStTfNZ4fIAX_9JdcD&tn=IzmvV3uJg8oh8yZV&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAtjUomfdwCnSvMkXDBd-ge843l-NhezLCS0YCMqxw7AA&oe=63821926" />
      </div>
      <div class="top">
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/126901188_393420855108525_7069297184192821223_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=99ID_3k26k4AX88RIca&_nc_ht=scontent.fhan2-4.fna&oh=00_AfD6hODbqti9dZlm56Xh23gcQYHIGE1118lXti7_NnGV0w&oe=63816027" />
      </div>
      <div class="bottom">
        <img
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/133586649_413572886426655_2419267418228547466_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YyVj9AFMOdoAX8tjlHF&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBOVye4_AYskAqNccBjGUn9qHrX4O9ANPGAvMPjSYhKeQ&oe=638070C1" />
      </div>
      <div class="left">
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/273522955_646560393127902_7233692976522738206_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wDCGUn4LXhIAX_hyXkv&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBFhWJXv-BPR3d5t5fZUJV3vGFpOqa9EcteKwCoIlSxLw&oe=635F3613" />
      </div>
      <div class="right">
        <img
          src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/280220435_703266800790594_5487608351818729802_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=i-Ll9mS8mJMAX9ug4Cq&tn=IzmvV3uJg8oh8yZV&_nc_ht=scontent.fhan2-1.fna&oh=00_AfDitK0aOqk4lFvAjA6CBG4ra41Z0s08egVsQI2o4GPD5w&oe=63604C24" />
      </div>
    </div>
    <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: light-blue;
        }
    
        #container {
          width: 350px;
          height: 350px;
          margin: auto;
          perspective: 880px;
    
        }
    
        .cover {
          width: 400px;
          height: 400px;
          animation: flip-animate 20s linear infinite;
          /*   Làm xoay các ảnh */
          transform-style: preserve-3d;
          /*   các thành phần bên trong class cover sẽ hiển thị dưới dạng 3D */
        }
    
        #container .cover div {
          width: 400px;
          height: 400px;
          position: absolute;
        }
    
        #container .cover div img {
          width: 400px;
          height: 400px;
        }
    
        #container .cover .front {
          transform: translateZ(200px);
          /*   định vị lại ảnh trong class front dọc theo trục z trong không gian 3D */
        }
    
        #container .cover .back {
          transform: rotateY(180deg) translateZ(200px);
          /*   xoay ảnh theo trục y là 180 độ và dịch chuyển đến trục Z */
        }
    
        #container .cover .left {
          transform: rotateY(-90deg) translateX(-200px);
          /*   xoay ảnh theo trục y là -90 độ và dịch chuyển đến trục X */
          transform-origin: left;
          /*   Cho phép dịch chuyển phần tử sang trái */
    
        }
    
        #container .cover .right {
          transform: rotateY(90deg) translateX(200px);
          /*   xoay ảnh theo trục Y là 90 độ và dịch chuyển đến trục X */
          transform-origin: right;
          /*   Cho phép dịch chuyển phần tử sang phải */
        }
    
        #container .cover .top {
          transform: rotateX(-90deg) translateY(-200px);
          /*   xoay ảnh theo trục X là -90 độ và dịch chuyển đến trục Y */
          transform-origin: top;
          /*   Cho phép dịch chuyển phần tử lên trên */
        }
    
        #container .cover .bottom {
          transform: rotateX(90deg) translateY(200px);
          /*   xoay ảnh theo trục X là 90 độ và dịch chuyển đến trục Y */
          transform-origin: bottom;
          /*   Cho phép dịch chuyển phần tử xuống dưới */
        }
    
        @keyframes flip-animate {
          0% {
            transform: rotateY(0);
          }
    
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
  </div>
  )
}
