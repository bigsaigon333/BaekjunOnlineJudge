#include <bits/stdc++.h>
#include <sstream>
using namespace std;

int main()
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  string s;
  while (getline(cin, s))
  {
    stringstream ss(s);

    int count = 0;
    for (int i = 0; i < 4; i++)
    {
      int temp;
      ss >> temp;
      if (temp == 0)
        count++;
    }

    if (count == 1)
      cout << 'A';
    else if (count == 2)
      cout << 'B';
    else if (count == 3)
      cout << 'C';
    else if (count == 4)
      cout << 'D';
    else if (count == 0)
      cout << 'E';

    cout << "\n";
  }

  return 0;
}