import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CandidateCard({candidate, index}) {
    const handleVoteCount= async (candidate)=> {
        await axios.get(
             `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${candidate.id}` 
         )
         .then ((response)=>{
             alert(candidate.name + '님에게 투표 완료!');
         })
         .catch ((error)=> {
             alert('투표 실패');
         });
    }
    return(    
        <EachCandidate>
            <CandidateRank>{index+1}위 </CandidateRank>
            <CandidateName>{candidate.name}</CandidateName>
            <CandidateVoteCount>[{candidate.voteCount}] 표</CandidateVoteCount>
            <VoteButton onClick={()=>handleVoteCount(candidate)}>투표</VoteButton>
        </EachCandidate>
    );
}
export default CandidateCard;
const EachCandidate = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    font-family: 'Do Hyeon', sans-serif;
    position: relative;
    display: flex;
    font-size: 20px;
    margin: 4px;
`;
const CandidateRank = styled.div`
    color: grey;
`;
const CandidateName = styled.div`
    position: absolute;
    left: 70px;
`;
const CandidateVoteCount = styled.div`
    position: absolute; 
    right: 70px;
`;
const VoteButton = styled.button`
    font-family: 'Do Hyeon', sans-serif;
    font-size: 17px;
    position: absolute; 
    right: 0;
    border: 1px solid skyblue;
    color: skyblue;
    background-color: white;
    border-radius: 5px;
    &:hover{
        color: white;
        background-color: skyblue;
    }
`;