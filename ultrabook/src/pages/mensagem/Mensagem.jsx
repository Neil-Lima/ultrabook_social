import React from "react";
import Layout_seg from "../../shared/layout/layout2/Layout_seg";
import Layout from '../../shared/layout/Layout'
function Mensagem() {
  return (
    <>
      <Layout>        
      <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-xl-4">
                <div class="row">
                    <div class="col d-flex flex-nowrap justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center py-2" style={{background: "var(--bs-primary)", height: "4rem", color: "var(--bs-white)"}}>
                        <h5 class="mr-auto my-auto">Conversas</h5>
                        <button class="btn shadow-none border-0 my-auto" type="button" style={{width: "2.5rem", height: "2.5rem"}}><i class="far fa-comment-alt" style={{color: "var(--bs-white)"}}></i></button>
                    </div>
                </div>
                <div class="row px-3 py-2">
                    <div class="col" style="border-radius: 25px;box-shadow: 0px 0px 5px var(--gray-dark);">
                        <form class="d-flex align-items-center px-2"><i class="fas fa-search fa-lg"></i><input class="shadow-none form-control flex-shrink-1" type="search" placeholder="Pesquisar uma conversa" style="border-radius: 13px;border-style: none;"></form>
                    </div>
                </div>
                <div class="row">
                    <div class="col" style="overflow-x: none;overflow-y: auto;max-height: 32.5rem;height: auto;">
                        <ul class="list-unstyled">
                            <li style="cursor:pointer;">
                                <div class="card border-0">
                                    <div class="card-body" style="background: var(--bs-primary);color: var(--bs-white);"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style="width: 2rem;height: 2rem;border-radius: 15px;background: var(--bs-primary);">1</span>
                                        <h4 class="text-nowrap text-truncate card-title">Obito Uchiha</h4>
                                        <h6>19 de abril de 2023, 11:53</h6>
                                    </div>
                                </div>
                            </li>
                            <li style="cursor:pointer;">
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style="width: 2rem;height: 2rem;border-radius: 15px;background: var(--bs-primary);">1</span>
                                        <h4 class="text-nowrap text-truncate card-title">Uchiha Itachi</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style="font-size: .7rem;">19 de Julho de 2023, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, cons..<br></h6>
                                    </div>
                                </div>
                            </li>
                            <li style="cursor:pointer;">
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style="width: 2rem;height: 2rem;border-radius: 15px;background: var(--bs-primary);">10</span>
                                        <h4 class="text-nowrap text-truncate card-title">Rin Nohara</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style="font-size: .7rem;">19 de Julho de 2023, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                            <li style="cursor:pointer;">
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style="width: 2rem;height: 2rem;border-radius: 15px;background: var(--bs-primary);">5</span>
                                        <h4 class="text-nowrap text-truncate card-title">Hyuuga Hizashi</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style="font-size: .7rem;">19 de Julho de 2023, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                            <li style="cursor:pointer;">
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style="width: 2rem;height: 2rem;border-radius: 15px;background: var(--bs-primary);">75</span>
                                        <h4 class="text-nowrap text-truncate card-title">Iruka</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style="font-size: .7rem;">19 de Julho de 2023, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                            <li style="cursor:pointer;">
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style="width: 2rem;height: 2rem;border-radius: 15px;background: var(--bs-primary);">200</span>
                                        <h4 class="text-nowrap text-truncate card-title">Nagato</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style="font-size: .7rem;">19 de Julho de 2023, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div class="row">
                    <div class="col d-flex align-items-lg-center align-items-xl-center border-start border-muted" style="background: var(--bs-primary);height: 4rem;color: var(--bs-white);"><button class="btn d-block d-sm-block d-md-block d-lg-none d-xl-none border-0 my-auto" type="button" style="width: 2.5rem;height: 2.5rem;"><i class="far fa-arrow-alt-circle-left"></i></button>
                        <h5 class="mr-auto my-auto">Obito Uchiha</h5><span class="my-auto"><i class="fas fa-info-circle"></i></span>
                    </div>
                </div>
                <div class="row px-3 py-2 border-start border-muted">
                    <div class="col" style="overflow-x: none;overflow-y: auto;max-height: 30.5rem;height: auto;">
                        <ul class="list-unstyled">
                            <li class="my-2">
                                <div class="card border border-muted" style="width: 65%;border-top-left-radius: 0px;border-top-right-radius: 20px;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;background: rgba(52,58,64,0.05);">
                                    <div class="card-body text-center p-2" style="background: var(--bs-primary);color: var(--bs-white);">
                                        <p class="text-start card-text" style="font-size: 1rem;">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                        <h6 class="text-muted card-subtitle text-end" style="font-size: .75rem;">Julio 22, 2021. 12:33 P.M.</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="d-flex justify-content-end my-2">
                                <div class="card border border-muted" style="width: 65%;border-top-left-radius: 20px;border-top-right-radius: 0px;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;background: rgba(52,58,64,0.05);">
                                    <div class="card-body text-center p-2"><img class="img-fluid mb-2" src="https://img.quizur.com/f/img60d671992db947.80776776.jpg?lastEdited=1624666526" style="max-height: 30rem;height: auto;min-height: 10rem;">
                                        <p class="text-start card-text" style="font-size: 1rem;">Equipe Minato</p>
                                        <h6 class="text-muted card-subtitle text-end" style="font-size: .75rem;">Abril 22, 2021. 12:33&nbsp;</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="my-2">
                                <div class="card border border-muted" style="width: 65%;border-top-left-radius: 0px;border-top-right-radius: 20px;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;background: var(--bs-primary);color: var(--bs-white);">
                                    <div class="card-body text-center p-2"><img class="img-fluid mb-2" src="https://donerd.com.br/wp-content/uploads/2022/11/Kakashi-Hatake-foi-uma-crianca-prodigio%E2%80%8B.png" style="max-height: 30rem;height: auto;min-height: 10rem;">
                                        <p class="text-start card-text" style="font-size: 1rem;">Kakashi, o filho do canino branco</p>
                                        <h6 class="text-muted card-subtitle text-end" style="font-size: .75rem;color: #f5f3f3;">Julio 22, 2021. 12:33 P.M.</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="d-flex justify-content-end my-2">
                                <div class="card border border-muted" style="width: 65%;border-top-left-radius: 20px;border-top-right-radius: 0px;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;background: rgba(52,58,64,0.05);">
                                    <div class="card-body text-center p-2">
                                        <p class="text-start card-text" style="font-size: 1rem;">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                        <h6 class="text-muted card-subtitle text-end" style="font-size: .75rem;">Julho 22, 2023. 12:33&nbsp;</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row px-3 py-2" style="background: rgba(52,58,64,0.2);">
                    <div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10" style="padding: 0;"><textarea class="w-100 h-100 border-0" style="border-radius: 25px;resize:none;"></textarea></div>
                    <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-nowrap d-md-flex justify-content-md-end p-0"><button class="btn h-100 mx-auto" type="button" style="border-radius: 10px;"><i class="far fa-image"></i></button><button class="btn btn-light h-100 w-auto" type="button" style="border-radius: 10px;"><i class="fab fa-telegram-plane"></i></button></div>
                </div>
            </div>
        </div>
    </div>
       
      </Layout>
    </>
  );
}

export default Mensagem;
