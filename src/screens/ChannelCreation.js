import React, {useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Button, Input, ErrorMessage} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressContext, UserContext} from '../contexts';
import {createChannel} from '../firebase';
import {Alert} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ChannelCreation = ({navigation}) => {
  const {spinner} = useContext(UserContext);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [errorMessage, setErrorMassage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const refDesc = useRef(null);

  useEffect(() => {
    setDisabled(!(title && !errorMessage));
  }, [title, errorMessage]);

  const _handleTitleChange = title => {
    setTitle(title);
    setErrorMassage(title.trim() ? '' : 'Please enter the title');
  };

  const _handleDescChange = desc => {
    setDesc(desc);
    setErrorMassage(title.trim() ? '' : 'Please enter the title');
  };

  const _handleCreateBtnPress = async () => {
    try {
      spinner.start();
      const id = await createChannel({title: title.trim(), desc: desc.trim()});
      navigation.replace('Channel', {id, title});
    } catch (e) {
      Alert.alert('Creation Error', e.message);
    } finally {
      spinner.stop();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      extraScrollHeight={20}>
      <Container>
        <Input
          label="Title"
          value={title}
          onChangeText={_handleTitleChange}
          onSubmitEditing={() => refDesc.current.focus()}
          onBlur={() => setTitle(title.trim())}
          placeholder="Title"
          returnkeyType="next"
          maxLength={20}
        />
        <Input
          ref={refDesc}
          label="Description"
          value={desc}
          onChangeText={_handleDescChange}
          onSubmitEditing={_handleCreateBtnPress}
          onBlur={() => setDesc(desc.trim())}
          placeholder="Description"
          returnkeyType="done"
          maxLength={40}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="Create"
          disabled={disabled}
          onPress={_handleCreateBtnPress}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default ChannelCreation;
