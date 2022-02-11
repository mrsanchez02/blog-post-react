import landscape from './landscape.jpg';
import style from './home.module.css';
import { useEffect,useState } from 'react';

function App() {

  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffSet(window.scrollY);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll',onScroll);

    return () => window.removeEventListener('scroll', onScroll);

  }, [])
  
  
  return (
    <div className={style.post__container}>
      <img src={landscape} id='picture' alt='Post title' className={offSet<=200?style.post__picture:style.post__picture_reading}/>
      <h1 className={style.post__title} id='title'>Works!</h1>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque voluptates quos quas harum dignissimos est tenetur, ex voluptate tempora commodi sint officia sit maxime explicabo eveniet modi, similique, odit tempore porro mollitia magnam quisquam? Natus, corporis provident sapiente cupiditate minima, ea, nisi modi delectus reiciendis dicta architecto enim aspernatur porro. Iusto neque nobis, sequi expedita cumque soluta totam. Eos iure impedit inventore suscipit accusamus reprehenderit quas officia dolorum dolor, voluptas nulla repellendus itaque eveniet corrupti saepe sapiente in sunt reiciendis enim natus? Repellendus officiis facilis voluptate tenetur sequi eum, hic asperiores. Ipsa hic dolore aperiam modi voluptate nulla, ex magni labore fuga! Ratione magni rerum iusto nobis perferendis quis? Modi, suscipit? Voluptatum hic et vero quod perferendis atque tempore expedita, eos corporis odit non magni accusamus fugiat consequatur quasi, laborum voluptatem ratione ullam dicta at a!</p>
        
      <p> Neque assumenda fugit consequuntur officiis adipisci architecto cumque modi sit laboriosam expedita! Culpa nihil quia aliquam quas harum. Facilis omnis, quos iure, nam totam sit consequuntur nobis dolore repellendus a veniam debitis fuga! Id quo quis magnam modi a animi! Quas magnam sequi nisi sunt laudantium voluptatem accusamus tempore aliquid fuga obcaecati! Cupiditate sint voluptates dolore nesciunt vitae quidem? Eos perferendis officiis accusantium, ipsum eaque ullam quam esse modi ipsa! Animi repellendus, perferendis, a numquam eveniet dolor earum distinctio, quas ullam amet doloremque eligendi nulla exercitationem? Omnis, neque reprehenderit architecto officiis magnam in voluptate libero inventore et atque delectus illo eum quia, aperiam perferendis eveniet optio maxime facilis, magni ullam incidunt fuga fugiat.
      </p> 
      <p>Facere tempore deleniti a possimus necessitatibus animi officiis, sit voluptates asperiores obcaecati? Tempore id, amet eos praesentium velit sint dolores nostrum officiis tempora debitis quia fugiat natus, vero eaque deleniti voluptatibus doloremque, exercitationem veniam? Dicta eaque consectetur dolores adipisci magni veniam minima, officia odit vel beatae ipsum nam hic eligendi repudiandae iusto odio fugiat qui tempore natus sed! Dolores quibusdam, consequuntur voluptas accusamus ex nulla optio ullam, fugit doloribus ad modi obcaecati? Aperiam quam fuga totam voluptates, laborum voluptatem magnam rem velit odio iste recusandae? Amet soluta enim debitis impedit quam, dicta est aliquam, sed obcaecati architecto a ex labore natus beatae. </p>
      <p> Minus explicabo et corporis quisquam esse dignissimos illo neque vel rerum? Magni nesciunt laborum sed, illum totam sint ipsa omnis harum optio vero tenetur odit ullam dolor eum, velit voluptatem in quisquam rem fugit sapiente. Laboriosam officiis expedita minus, voluptas repellat hic debitis facere error dolore earum consectetur non ut explicabo eum nulla similique suscipit delectus a nesciunt, maiores quidem recusandae asperiores soluta autem. Impedit error suscipit accusamus excepturi facere porro debitis totam dolorem incidunt, distinctio obcaecati in perspiciatis architecto vel fugiat consequuntur? Expedita maiores soluta aliquid repudiandae, vitae beatae dolorum asperiores pariatur ipsa voluptatum laudantium, necessitatibus commodi quaerat cumque fugit adipisci. Explicabo laboriosam nobis velit exercitationem, debitis autem temporibus, amet ullam ex ducimus recusandae non hic! Numquam, dicta quod. Quo ipsa animi eaque vel dolorum nisi expedita molestiae necessitatibus repudiandae repellat illum magni illo obcaecati natus aspernatur mollitia quia, voluptatem nesciunt fugiat atque enim autem. Perspiciatis, in!</p>
      <a href='#picture'>Top</a>
    </div>
  );
}

export default App;
