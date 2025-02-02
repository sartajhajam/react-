function App() {
  return (
    <div style={{backgroundColor:'#dfe6e9',width:'100vw'}}>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div>
      <PostComponent></PostComponent>
      </div>
      <div>
      <PostComponent></PostComponent>
      </div>



    </div>
    </div>
   
   
  )
}

const style = {width: '100',backgroundColor: 'white',borderRadius :10,borderColor:'grey', borderWidth:1,padding:'20',display: 'flex'}
function PostComponent() {
  return <div style={{display:"flex"}}>
      <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}style={{
        width : 20,
        height : 20,
        borderRadius :10,

      }}/>
      <div style={{fontSize:10,marginLeft:10}}>
        <b>
          100xdevs
        </b>
        <div>23,888 followers</div>
        <div>12M</div>
        <div style={{color:'grey', fontSize:12}}>
          What to know how to win big? Check Out these folks who won $6000 in bounties.
        </div>
      </div>




    </div>

}
// structuring your app into components
// Defining a state of your app
export default App;
