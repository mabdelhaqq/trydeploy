import img1 from '../../../../assets/images/fi.png';
import img2 from '../../../../assets/images/gr.png';
import img3 from '../../../../assets/images/ui.png';
import img4 from '../../../../assets/images/web.png';
import './SecondNav.scss';

const secondNavItems = [
  {
    imgSrc: img1,
    altText: 'img1',
    title: 'Fashion Design',
    new: false,
    count: 0
  },
  {
    imgSrc: img2,
    altText: 'img2',
    title: 'Graphic Design',
    new: true,
    count: 25
  },
  {
    imgSrc: img3,
    altText: 'img3',
    title: 'UI/UX Community',
    new: false,
    count: 0
  },
  {
    imgSrc: img4,
    altText: 'img4',
    title: 'Web Designer',
    new: false,
    count: 0
  }
];

const SecondNav = () => {
  return (
    <nav className="links2">
      {secondNavItems.map((item, index) => (
        <div key={index} className="item-link">
          <div className="info-page">
            <img src={item.imgSrc} alt={item.altText} className="img-item" />
            <span className="title-links">{item.title}</span>
          </div>
          {item.new ? <div className="count">{item.count}</div> : <></>}
        </div>
      ))}
    </nav>
  );
};

export default SecondNav;
