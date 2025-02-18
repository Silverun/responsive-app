import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, Text, Pressable, Button, Platform, Alert } from "react-native";
import {
  check,
  openPhotoPicker,
  openSettings,
  Permission,
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from "react-native-permissions";

interface PermissionsProps {}

export const Permissions = ({}: PermissionsProps) => {
  const cameraPermission: Permission =
    Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const micPermission: Permission =
    Platform.OS === "ios"
      ? PERMISSIONS.IOS.MICROPHONE
      : PERMISSIONS.ANDROID.RECORD_AUDIO;

  const requestPermissionCamera = async () => {
    const status = await request(cameraPermission, {
      title: "Camera Permission",
      message: "App needs access to your camera",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    });
    Alert.alert("Status: " + status, "We need your camera!", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Open settings",
        onPress: () => openSettings("alarms"),
      },
    ]);
    // alert(status + " " + Platform.OS + " request permissions log");
  };

  const checkPermission = (permission: Permission) => {
    check(permission).then((status) => {
      switch (status) {
        case RESULTS.UNAVAILABLE:
          return alert(
            `The permission "${permission}" is not available (on this device / in this context)`
          );
        case RESULTS.DENIED:
          return alert(
            `The permission "${permission}" has not been requested / is denied but requestable`
          );
        case RESULTS.BLOCKED:
          return alert(
            `The permission "${permission}" is denied and not requestable`
          );
        case RESULTS.GRANTED:
          return alert(`The permission "${permission}" is granted`);
        case RESULTS.LIMITED:
          return alert(
            `The permission "${permission}" is granted but with limitations`
          );
      }
    });
  };

  const requestCameraAndMic = async () => {
    const statuses = await requestMultiple([cameraPermission, micPermission]);
    Alert.alert("Statuses", JSON.stringify(statuses));
    if (
      statuses[cameraPermission] === RESULTS.BLOCKED ||
      statuses[micPermission] === RESULTS.BLOCKED
    ) {
      openSettings();
    }
  };

  const openPhoto = () => {
    openPhotoPicker().catch(() =>
      console.warn("Cannot open photo library picker")
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 12 }}>
      <Text>Permissions</Text>
      <Button
        title="Check permission - camera"
        onPress={() => checkPermission(cameraPermission)}
      />
      <Button
        title="Request permission - camera"
        onPress={requestPermissionCamera}
      />
      <Button title="Open settings" onPress={() => openSettings()} />
      <Button title="Request camera and mic" onPress={requestCameraAndMic} />
      <Button title="Open photo picker" onPress={openPhoto} />
    </View>
  );
};
