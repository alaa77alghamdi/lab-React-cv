//const contanier =document.getElementById("root");

//const element =React.createElement("div",{
//children:"alaa"
//});//
//ReactDOM.render(element,contanier);//

const contanier1 = document.getElementById("root");
let element = (
  <>
    <div class="a1">
      <div class="image">
        <img src="wom.avif" style={{ width: "100px" }}></img>
      </div>

      <h1>My Cv</h1>
      <h1>alaa abdullah </h1>
      <p>Phone :0565540469</p>
      <p>Email: Alaagh1701@gmail.com</p>
      <a href="https://www.linkedin.com/in/alaa-al-ghamdi-24836820a/">linkedin</a>
      <hr></hr>
      <div>
        <h2>Eduction </h2>

        <h3>Bachelor in Computer Informtion</h3>
        <p>The University of Jeddah - Jeddah</p>
        <p>
          I was trained to make a Database with Oracle,<br></br> Microsoft
          Access and make small Web site using Visual Studio <br></br>I worked
          on a graduation project using php and javascript and some applications
        </p>
        <hr></hr>
      </div>
      <div>
        <h2>SKILLS</h2>

        <ul>
          <li>Interpersonal Communication</li>
          <li>Leadership</li>
          <li>javascript</li>
        </ul>
        <hr></hr>
      </div>

      <div>
        <h2> Language</h2>
        <ul>
          <li>Arabic</li>
          <li>English</li>
        </ul>
      </div>
    </div>
  </>
);

ReactDOM.render(element, contanier1);
