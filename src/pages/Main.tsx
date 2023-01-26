import GoogleLogin from '../components/LoginButton';

const MainPage = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='https://placeimg.com/260/400/arch'
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div className='ml-4'>
            <h1 className='text-5xl font-bold'>Social Cagegory Service</h1>
            <p className='py-6'>
              <strong>
                1. 구독하고 계신 유튜브 크리에이터의 새로운 영상 !{' '}
              </strong>
              <br />
              <strong>
                2. 팔로우 하고 있는 인스타 인플루언서의 새로운 피드!!
              </strong>
              <br />
              <strong>3. 이웃 추가를 한 파워 블로그의 새로운 글! </strong>
              <br />
              다양한 플랫폼에서 구독 하고 있는 컨텐츠를 <br />
              내가 원하는카테고리로 분류하여 Social Cagegory App 에서 쉽게 확인
              해보세요!
            </p>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
