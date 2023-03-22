import { BsQuestionCircle, BsFillFolderFill } from 'react-icons/bs'
import './SideActions.css'

export default function SideActions() {
  const size = 20

  return (
    <div className="side-actions">
      <BsQuestionCircle size={size} />
      <BsFillFolderFill size={size} />
    </div>
  );
}
