import "./HomepageCards.css";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarRateIcon from "@mui/icons-material/StarRate";
import GradeIcon from "@mui/icons-material/Grade";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";



function HomepageCards() {
  return (
    <div className="grid">
      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="./images/bridge.jpeg" alt="Rome" />
          <div className="card-content">
            <h3 className="header">
              <NewReleasesIcon fontSize="large" /> New Events{" "}
            </h3>

            <p className="card-text">
              {/* Rome is known for its stunning <strong> architecture</strong>,
                with the Colleseum, Pantheon, and Trevi Fountain as the main
                attractions. */}
            </p>
            <button className="card-btn">
              See more details <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid-item">
        <div className="card">
          <img
            className="card-img"
            src="./images/bird.jpg"
            alt="Grand Canyon"
          />
          <div className="card-content">
            <h3 className="header">
              <GradeIcon fontSize="large" /> Top Rated Events
            </h3>
            <p className="card-text">
              {/* One of the world's natural wonders, the iconic Grand Canyon
                draws oohs and aahs from visitors perched at the edge of its
                <strong>towering cliffs</strong>. */}
            </p>
            <button className="card-btn">
              See more details <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="./images/water.jpeg" alt="Maldives" />
          <div className="card-content">
            <h3 className="header">
              <HourglassTopIcon fontSize="large" /> Last Minute Deals
            </h3>
            <p className="card-text">
              {/* The Maldives are known for their
                <strong>natural environment</strong> including the blue ocean,
                white beaches, and clean air, attracting tourists. */}
            </p>
            <button className="card-btn">
              See more details <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageCards;
