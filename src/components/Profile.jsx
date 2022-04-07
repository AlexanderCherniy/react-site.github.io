let Profile = ()=>{
    return(
      <main className='main'>
      <div className='main__container'>
        <div className='mainPhoto'> <img src='https://bellyupsports.com/wp-content/uploads/2020/07/merlin_166319154_b92292b2-1a0f-437d-a694-8a97b586227d-mobileMasterAt3x.jpg' alt='dank'></img> </div>
        <div className='mainProfile'>
          <div className='mainProfile__img'> <img src='https://teatral-online.ru/i/ph/xl/xl_20191211150357.jpg'></img> </div>
          <div className='mainProfile__text'>
            <div className='mainProfile__name'>Dmitry A.</div>
              <div className='mainProfileInfo'>
                <div className='mainProfileInfo_birth mainProfileTextStyle'>Date Of Birth: 11 February</div>
                <div className='mainProfileInfo_city mainProfileTextStyle'>City: Moscow</div>
                <div className='mainProfileInfo_web mainProfileTextStyle'>Web Site: https:\\google.com</div>
                <div className='mainProfileInfo_learn'>LEARN MORE</div>
              </div>
          </div>
        </div>
      </div>
    </main>
    )
}
export default Profile