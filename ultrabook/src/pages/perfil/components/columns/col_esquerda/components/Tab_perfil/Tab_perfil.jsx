import React from 'react'

function Tab_perfil() {
    return (
        <>
            <div>
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-1">Postagens</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Jutsus</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-3">Frases</a>
                    </li>
                </ul>

                <div class="tab-content" style={{ padding: "11px" }}>
                    <div id="tab-1" class="tab-pane" role="tabpanel">
                        <p>Content for tab 1.</p>
                    </div>

                    <div id="tab-2" class="tab-pane" role="tabpanel">
                        <p><img src="https://static.wikia.nocookie.net/naruto/images/5/55/Kakashi_usando_Sairento_Kiringu.png/revision/latest/scale-to-width-down/200?cb=20140716052113&amp;path-prefix=pt-br" style={{ width: "100px", height: "75px" }} /> Assassinato Silencioso</p>
                        <p><img src="https://static.wikia.nocookie.net/naruto/images/1/15/Chidori_%28Kakashi_Gaiden%29.PNG/revision/latest/scale-to-width-down/200?cb=20121208211205&amp;path-prefix=pt-br" style={{ width: "100px", height: "75px" }} /> Chidori</p>
                        <p><img src="https://static.wikia.nocookie.net/naruto/images/0/06/Suiton_Suiry%C5%ABdan_no_Jutsu.PNG/revision/latest/scale-to-width-down/200?cb=20170522184458&amp;path-prefix=pt-br" style={{ width: "100px", height: "75px" }} /> Estilo Água: Técnica da Bomba do Dragão de Água</p>
                    </div>

                    <div id="tab-3" class="tab-pane active" role="tabpanel">
                        <p>&quot;Eu sou Kakashi Hatake. Eu não tenho vontade de falar para vocês de meus gostos e desgostos… Meus sonhos para o futuro são… H-hm… Em relação à meus hobbies… Eu tenho vários hobbies…&quot;</p>
                        <p>&quot;Desculpa, eu receio que me perdi no caminho.&quot;</p>
                        <p>&quot;Este lugar me faz pensar sobre os erros que eu cometi no passado… e eu fiz muitos.&quot;</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab_perfil