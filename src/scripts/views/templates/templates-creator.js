import CONFIG from '../../globals/config';


const createCardConsultantsTemplate = (consultant) => `
    <div class="card-consultant">
                    <div class="content-card">
                        <div class="profile">
                            <img tabindex="0" class="card-item_poster lazyload" src="${consultant.avatar}" alt="${consultant.name}">
                        </div>
                        <div class="description">
                            <h5>${consultant.name}</h5>
                            <p>${consultant.specialist}</p>
                            <b>${consultant.practicePlace}</b>
                            <div class="rate-experience">
                                <div class="rates">
                                    <span>⭐</span>
                                    <b>${consultant.star}</b>
                                </div>
                                <div class="experience">
                                    <i class="fa-solid fa-business-time"></i>
                                    <b>${consultant.experience} tahun</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-card">
                        <h5>RP${consultant.price}</h5>
                        <div class="button">
                            <a href="" class="detail">Detail</a>
                            <a href="" class="schedule">Schedule</a>
                        </div>
                    </div>
                </div>
`;

export default createCardConsultantsTemplate;
