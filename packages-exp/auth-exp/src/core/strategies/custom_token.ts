/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as externs from '@firebase/auth-types-exp';

import { signInWithCustomToken as getIdTokenResponse } from '../../api/authentication/custom_token';
import { IdTokenResponse } from '../../model/id_token';
import { UserCredentialImpl } from '../user/user_credential_impl';
import { _castAuth } from '../auth/auth_impl';

/**
 * Asynchronously signs in using a custom token.
 *
 * @remarks
 * Custom tokens are used to integrate Firebase Auth with existing auth systems, and must
 * be generated by an auth backend using the
 * {@link https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createcustomtoken | createCustomToken}
 * method in the {@link https://firebase.google.com/docs/auth/admin | Admin SDK} .
 *
 * Fails with an error if the token is invalid, expired, or not accepted by the Firebase Auth service.
 *
 * @param auth - The Auth instance.
 * @param customToken - The custom token to sign in with.
 *
 * @public
 */
export async function signInWithCustomToken(
  auth: externs.Auth,
  customToken: string
): Promise<externs.UserCredential> {
  const response: IdTokenResponse = await getIdTokenResponse(auth, {
    token: customToken,
    returnSecureToken: true
  });
  const authInternal = _castAuth(auth);
  const cred = await UserCredentialImpl._fromIdTokenResponse(
    authInternal,
    externs.OperationType.SIGN_IN,
    response
  );
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}