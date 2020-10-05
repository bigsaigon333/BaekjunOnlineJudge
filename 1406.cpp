#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    string s;
    cin >> s;
    const char *cs = s.c_str();

    int M;
    cin >> M;

    list<char> l(cs, cs + s.size());
    list<char>::iterator t = l.end();

    for (int i = 0; i < M; i++)
    {
        char op, val;

        cin >> op;

        if (op == 'L')
        {
            if (t != l.begin())
                t--;
        }
        else if (op == 'D')
        {
            if (t != l.end())
                t++;
        }
        else if (op == 'B')
        {
            if (l.size() > 0)
            {
                cout << l.size() << " " << *t << "\n";

                if (t == l.begin())
                    l.pop_front();
                // else
                //     l.erase(t);
            }
        }
        else if (op == 'P')
        {
            cin >> val;
            l.insert(t, val);
        }
    }

    for (auto c : l)
        cout
            << c << " ";

    return 0;
}