# How to Use / Setup
## Note:
- `[command]?` denotes an **optional** command
- This bot currently supports one embedded message. Creating a new one will not allow you to make edits to any previous ones.
- Copy and Pasting Slash commands might not work, just type `/` then start typing the name of the command and the fields will appear for you to fill

## 1. Start with the `/create` command
### Usage:
#### `/create [channel] [title] [description]? [image]? [thumbnail]? [color]?`
### Arguments:
#### `channel`: The channel that this message is displayed in.
#### `title`: The title of the embedded message.
#### `description`: The description of the embedded message.
#### `image`: A large image at the bottom of an embed.
#### `thumbnail`: A medium sized image at the top right of an embed.
#### `color`: The color of the bar on the left of an embed.
### Example:
#### **`/create`**` channel:` **`#roles`**` title:` **`Role Selector`**` description:` **`Choose Your Roles!`**` image:` **`https://cdn.discordapp.com/attachments/896665507594375179/896671872077398026/Color1_Icon.png`**  ` color:` **`#7289DA`**
### Result:
![](https://cdn.discordapp.com/attachments/896971320934432848/896971359668801536/unknown.png)

## 2. Next use the `/add row` command
### Usage:
#### `/add row [row] [multiple]`
### Arguments:
#### `row`: The name of the displayed in the drop down menu.
#### `multiple`: True allows users to select multiple role, False allows users to select only one role (in that row).
### Example:
#### **`/add row`**` row:` **`Mobile Devices`**` multiple:` **`False`**
### Result:
![](https://cdn.discordapp.com/attachments/896971320934432848/896972527279169586/unknown.png)

## 3. Next use the `/add role` command
### Usage:
#### `/add role [row] [name] [description] [role]? [emoji]?`
### Arguments:
### `row`: The name of the drop down menu that you would like this role to be added to.
### `name`: The name of this role.
### `description`: The description of this role.
### `role`: Use this to provide a pre-existing role that you would like added to a select menu. Leave empty for the bot to create a role with the name given in the `name` parameter
### `emoji`: Optionally include an emoji in the select menu for visual appeal.
### Example:
#### **`/add role`**` row:` **`Mobile Devices`**` name:` **`iPhone 8`**` description:` **`Apple iPhone 8`**` emoji:`**`:mobile_phone:`**
### Result:
![](https://cdn.discordapp.com/attachments/896971320934432848/896975492765351975/unknown.png)

## 4. Repeat Step 2 to add more rows and Step 3 to add more roles.

## 5. You are done. The users just select the role they want and the bot assigns them accordingly. If the user already has the role, it will be removed from them.

# Management

## Remove A Row
### Usage:
#### `/remove row [row]`
### Arguments:
#### `row`: The name of the row you would like removed from the select menu.
### Example:
#### **`/remove row`**` row:` **`Mobile Devices`**
### Result:
![](https://cdn.discordapp.com/attachments/896971320934432848/896977989596745779/unknown.png)

(The `Mobile Devices` row is now gone.)

## Remove a Role From the Select Menu
### Usage:
#### `/remove roles`
### Arguments:
#### `None`: Just click the corresponding roles that you would like to remove.
### Example:
#### **`/remove roles`**
### Result:
![](https://cdn.discordapp.com/attachments/896971320934432848/896978969730113596/unknown.png)

## Invite to Another Server
### Usage:
#### `/invite`
### Arguments:
#### `None`: Just click the button at the bottom of the message.
### Example:
#### **`/invite`**
### Result:
![](https://cdn.discordapp.com/attachments/896971320934432848/896976900973539338/unknown.png)