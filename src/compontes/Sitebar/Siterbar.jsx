import React, {useState ,useContext} from 'react';
import user from '../../assets/userlogo.png'
import './Sitebar.css'
import  {DataContext} from '../../Contex/Contex'
const Siterbar = () => {
  const [acitve, setacitve] = useState();
  const { data, updateData } = useContext(DataContext);
  const mas = [
    {
      name: 'user1',
      desc: 'lorem1'
    },
    {
      name: 'user2',
      desc: 'lorem2'
    },
    {
      name: 'user3',
      desc: 'lorem3'
    },
    {
      name: 'user4',
      desc: 'lorem4'
    },
  ]
  function run(i){
    setacitve(i)
    
    updateData(i);
    console.log(data, 'ss');
  }
  return (
    <div className='siteheader ' >
      <div className='container row'>
      {
        mas.map((item, index) => {
          return (
            <div key={index} onClick={()=>run(index)} className={`col-12 my-1 hover1 ${(acitve === index)? 'hover2' : ''}` }>
              <div className='d-flex justify-content-start align-items-center'>
                <img src={user} alt="user" />
                <div className='mx-5 pt-2'>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  );
}

export default Siterbar;
