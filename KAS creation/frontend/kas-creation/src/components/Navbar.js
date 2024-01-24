import { MDBIcon } from 'mdb-react-ui-kit';
function Navbar(){
 let name="Ash";
   return ( 
   
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KAS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button></div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Login">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
       
       
        
      </ul>
      </div>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
       
            {/* <button aria-current="page" href="#"><i class="bi bi-person-circle"></i></button>
          
        <div style={{ fontSize: '10rem' }}>  */}
      <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"white"
      }}>
        <MDBIcon
          className= 'me-3'
          icon='bi bi-person-circle'
          style={{ color: 'white' , width:' 4.95em'}}
          fixed
          iconType='solid'
         />
         <div>Hi {name}</div>
         </div>
      
      {/* <i class='bi bi-person-circle' color='white'></i> */}
   
      
    
  
</nav>

);
}
export default Navbar;