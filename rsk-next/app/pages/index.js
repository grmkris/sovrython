import styles from '../static/styles/index-styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { web3Mainnet, web3Testnet, getSimpleStorageValue} from '../utils/web3-util';

function Index(props) {
  const UpdateButton = () => (
    <Button variant="success" onClick={() => updateNetworkData()}>
      Update
    </Button>
  );

  const [mainnetBlock, setMainnetBlock] = useState(1);
  const [testnetBlock, setTestnetBlock] = useState(1);
  const [simpleStorageValue, setSimpleStorageValue] = useState(1);
  
  const [updateComponent, setUpdateComponent] = useState(<UpdateButton />);
  const [bestBlockLoading, setBestBlockLoading] = useState(true);

  useEffect(() => {
    const initNetworkData = async () => {
      const mainnetBestBlock = await web3Mainnet.eth.getBlockNumber();
      const testnetBestBlock = await web3Testnet.eth.getBlockNumber();
      const networkSimpleStorageValue = await getSimpleStorageValue();
      setSimpleStorageValue(networkSimpleStorageValue.toNumber());      
      setMainnetBlock(mainnetBestBlock);
      setTestnetBlock(testnetBestBlock);
      setBestBlockLoading(false);
    }
    initNetworkData()
  }, []);

  async function updateNetworkData() {
    setUpdateComponent(<Spinner animation="border" variant="success" />);
    setMainnetBlock(await web3Mainnet.eth.getBlockNumber());
    setTestnetBlock(await web3Testnet.eth.getBlockNumber());
    setSimpleStorageValue((await getSimpleStorageValue()).toNumber());
    setUpdateComponent(<UpdateButton />);
  }

  const NetworkData = props => {
    return (
      <>
        {!props.loading ? (
          <div>
            <h4>Mainnet best block {props.mainnetBlock}</h4>
            <br />
            <h4>Testnet best block {props.testnetBlock}</h4>
            <br />
            <h4>Simple Storage Value {props.simpleStorageValue}</h4>
          </div>
        ) : (
          <Spinner animation="border" variant="success" />
        )}
      </>
    );
  };

  return (
    <div className="body">
      {styles}
      <div>
        <img className="rsk-logo" />
      </div>
      <h1 className="header">Welcome To RSK + Next JS Truffle Box</h1>
      <br />
      <Form>
        <Form.Group>
          <NetworkData
            mainnetBlock={mainnetBlock}
            testnetBlock={testnetBlock}
            simpleStorageValue={simpleStorageValue}
            loading={bestBlockLoading}
          />
        </Form.Group>
        <br />
        {updateComponent}
      </Form>
    </div>
  );
}

export default Index;
