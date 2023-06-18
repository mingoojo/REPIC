import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemBox from './ItemBox';
import TableHeader from './TableHeader';
import { CommunityItem } from '../../type/types';
import { Radio } from '../../pages/CommunityPage';
import FooterField from './FooterField';

const Container = styled.div`
a{
  text-decoration: none;
  color: #222;
}
a:hover{
  font-weight: bold;
}
header{
  display: flex;
  justify-content: space-between;
}
`;

type CommunityTableProps = {
  communityItems : CommunityItem[]
  check : Radio,
  setCheck : (check:Radio) => void,
  Page : string
}

export default function CommunityTable({
  communityItems, check, setCheck, Page,
}:CommunityTableProps) {
  const [searchText, setSearchText] = useState('');
  const [sortedCommunityItems, setSortedCommunityItems] = useState(communityItems);

  useEffect(() => {
    setSortedCommunityItems(communityItems);
  }, [communityItems]);

  const searchConfirm = () => {
    const sorted = communityItems.filter((communityItem) => (
      communityItem.title.includes(searchText.trim())
      || communityItem.text.includes(searchText.trim())
    ));
    setSortedCommunityItems(sorted);
  };

  const communityItemPage = sortedCommunityItems.filter((communityItem, index) => (
    index < (Number(Page)) * 10 && (Number(Page) - 1) * 10 <= index
  ));
  return (
    <>
      <Container>
        <TableHeader
          check={check}
          setCheck={setCheck}
          searchText={searchText}
          setSearchText={setSearchText}
          searchConfirm={searchConfirm}
        />
        <div>
          {
            communityItemPage.map((communityItem) => (
              <Link key={communityItem.id} to={`/communities/${communityItem.id}`}>
                <ItemBox communityItem={communityItem} />
              </Link>
            ))
          }
        </div>
      </Container>
      <FooterField communityItems={sortedCommunityItems} />
    </>
  );
}
