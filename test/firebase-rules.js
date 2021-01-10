import assert from 'assert';
import firebase from '@firebase/testing';

const PROJECT_ID = 'vngrs-c5a55';

const user = {uid: 'user_normal', admin: false};
const admin = {uid: 'user_admin', admin: true};

function getFireStore(auth = user) {
  return firebase.initializeTestApp({projectId: PROJECT_ID, auth}).firestore();
}
function sudoGetFireStore(auth = admin) {
  return firebase.initializeAdminApp({projectId: PROJECT_ID, auth}).firestore();
}

describe('Firebase', function () {
  it('User can get his data', async () => {
    const testDoc = getFireStore().collection('users').doc(user.uid);
    await firebase.assertSucceeds(testDoc.get());
  });

  it('User can update his data', async () => {
    const testDoc = getFireStore().collection('users').doc(user.uid);
    await firebase.assertSucceeds(testDoc.set({email: 'test@test.com'}));
  });

  it('User can not get others data', async () => {
    const testDoc = getFireStore().collection('users').doc('user_xyz');
    await firebase.assertFails(testDoc.get());
  });

  it('User can not update others data', async () => {
    const testDoc = getFireStore().collection('users').doc('user_xyz');
    await firebase.assertFails(testDoc.set({email: 'test@test.com'}));
  });

  it('Admin can get others data', async () => {
    // Create an admin user
    await sudoGetFireStore().collection('users').doc(admin.uid).set(admin);

    // Test
    const testDoc = getFireStore(admin).collection('users').doc('user_xyz');
    await firebase.assertSucceeds(testDoc.get());
  });

  it('Admin can update others data', async () => {
    const testDoc = getFireStore(admin).collection('users').doc('user_xyz');
    await firebase.assertSucceeds(testDoc.set({email: 'test@test.com'}));
  });
});
