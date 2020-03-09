# Enumeration

`ng g enum user/user`

in `user.enum.ts`:

```json
Admin, // 0
SuperUser  // 1
User // 2
```



Benutzen der Variablen in Componenten:

```typescript
import { User } from './user/user.enum';

constructor() {
console.log( User.User);
}

```



### Enumeration als String festlegen

`ng g enum user/userType`

in `userType.enum.ts`:

```json
  Admin = "Admin",
  SuperUser = "111",
  User = "User"
```

