import React from 'react';
import styled from 'styled-components';

const CardStoriesWrapper = styled.div`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 6px;
  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.08), 0 1px 20px 0 rgba(0, 0, 0, 0.07), 0px 1px 11px 0px rgba(0, 0, 0, 0.07);
`;

const WidgetHeader = styled.div`
  background: #fff;
  padding: 0px 8px 0px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom: 0px solid #f1f2f3;
`;

const WidgetContentArea = styled.div`
  padding: 20px;
  position: relative;
  background-color: #fff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const SingleStoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SingleStory = styled.div`
  height: 175px;
  width: 110px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const SingleStoryBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StoryAuthor = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  right: 0px;
  text-align: center;
  z-index: 99;
  cursor: pointer;
`;

const StoryAuthorImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 4px;
`;

const StoryAuthorName = styled.p`
  color: #fff;
  width: 100%;
  margin: 5px 0px 0px 0px;
  font-weight: 600;
  font-size: 12px;
`;

const CreateStoryAuthor = styled.div`
  margin: 0px;
  font-size: 13px;
  font-weight: 500;
`;

const CardStories = () => {
  return (
    <CardStoriesWrapper>
      <WidgetHeader>
        <h4 className="pb-0">Histórias</h4>
      </WidgetHeader>
      <WidgetContentArea>
        <SingleStoryContainer>
          <SingleStory>
            <SingleStoryBackground src="https://criticalhits.com.br/wp-content/uploads/2022/02/Screenshot-2022-02-24-at-04-25-27-kakashi-naruto_1rp1.1200.jpg-WEBP-Image-1200-%C3%97-674-pixels.png" />
            <StoryAuthor>
              <i className="fa fa-plus-circle fa-2x text-info"></i>
              <CreateStoryAuthor>Criar uma história</CreateStoryAuthor>
            </StoryAuthor>
          </SingleStory>
          <SingleStory>
            <SingleStoryBackground src="https://sm.ign.com/t/ign_br/screenshot/default/madara-plano-olho-da-lua_rtrx.1200.jpg" />
            <StoryAuthor>
              <StoryAuthorImage src="https://criticalhits.com.br/wp-content/uploads/2021/12/20200111-brinquedo-de-coleco-para-fs-uchiha-madara-frete-brinde-d_nq_np_634866-mlb26557161777_122017-f.jpg" />
              <StoryAuthorName>Madara</StoryAuthorName>
            </StoryAuthor>
          </SingleStory>
          <SingleStory>
            <SingleStoryBackground src="https://criticalhits.com.br/wp-content/uploads/2022/02/signo-sakura-naruto.jpg" />
            <StoryAuthor>
              <StoryAuthorImage src="https://criticalhits.com.br/wp-content/uploads/2022/04/Sakura-pensando.jpg" />
              <StoryAuthorName>Sakura</StoryAuthorName>
            </StoryAuthor>
          </SingleStory>    
          <SingleStory>
            <SingleStoryBackground src="https://criticalhits.com.br/wp-content/uploads/2022/06/Sennin_Modo_Hashirama_Senju_-_Anime.png" />
            <StoryAuthor>
              <StoryAuthorImage src="https://criticalhits.com.br/wp-content/uploads/2019/01/Hashirama_Senju_Edo_Tensei_HD.png" />
              <StoryAuthorName>Sakura</StoryAuthorName>
            </StoryAuthor>
          </SingleStory>      
        </SingleStoryContainer>
      </WidgetContentArea>
    </CardStoriesWrapper>
  );
};

export default CardStories;
