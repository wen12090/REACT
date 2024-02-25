import s from './Profile.module.css';


function Profile() {
    return <div className={s.content}>
    <div className={s.tiger}><img src='https://image.jimcdn.com/app/cms/image/transf/none/path/sfb8dc0980a213be7/backgroundarea/i4442945441188cbb/version/1497459201/image.jpg'></img></div>
    <div><img src='https://i.bimbolive.com/016/2e0/2b0/a4948618/2595763_portrait_th_b22206ebee19183af0d9526d0ba0104f.jpg'></img>
    ava+opisanie</div>
    <div>my post
      <div>new post</div>
    </div>
    <div className={s.post}>  
     <div className={s.item}>1post</div>
    <div className={s.item}>2post</div>
    </div>
 
  </div>

}
export default Profile;