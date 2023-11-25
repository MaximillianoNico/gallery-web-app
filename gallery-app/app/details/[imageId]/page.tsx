import ImageDetail from '@/screens/image-details'
import { BASE_URL } from '@/services/constant';

type TImageDetail = {
  imageId: string
}

interface IPageServerProps {
  params: TImageDetail
}

async function getData(imageId: string) {
  const response = await fetch(
    `${BASE_URL}/images/detail/${imageId}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'json/applications',
        'Content-Type': 'json/applications'
      }
    }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

const Page = async (props: IPageServerProps) => {
  const detail = await getData(props?.params?.imageId);

  return (
    <ImageDetail
      imageId={detail?.data._id}
      imageUrl={detail?.data.imageUrl}
    />
  )
}

export default Page;
